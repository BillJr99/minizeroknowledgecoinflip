radio.onReceivedNumber(function (receivedNumber) {
    if (player == 0) {
        guess = receivedNumber
        guesssent = 1
        radio.sendNumber(heads_tails)
        basic.pause(500)
        radio.sendString("name" + ":" + phonename)
        CheckForWinner()
    } else {
        heads_tails = receivedNumber
    }
})
input.onButtonPressed(Button.A, function () {
    if (player == 0) {
        heads_tails = (heads_tails + 1) % 2
        if (heads_tails == 0) {
            phonenumber = headsnumber
            phonename = headsname
            basic.showIcon(IconNames.Heart)
        } else {
            phonenumber = tailsnumber
            phonename = tailsname
            basic.showIcon(IconNames.EigthNote)
        }
    } else {
        guess = (guess + 1) % 2
        if (guess == 0) {
            basic.showIcon(IconNames.Heart)
        } else {
            basic.showIcon(IconNames.EigthNote)
        }
    }
    basic.pause(1000)
})
function CheckForWinner () {
    if (guess == heads_tails) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
}
input.onButtonPressed(Button.AB, function () {
    player = (player + 1) % 2
    basic.showNumber(player)
    hintsent = 0
    guesssent = 0
    tailsnumber = "2155553434"
    tailsname = "Thomas Lee"
    headsnumber = "2155551212"
    headsname = "Harriet Smith"
    heads_tails = 0
    phonenumber = headsnumber
    phonename = headsname
})
radio.onReceivedString(function (receivedString) {
    if (receivedString.split(":")[0] == "num") {
        phonenumber = receivedString.split(":")[1]
        basic.showString("" + (phonenumber))
        hintsent = 1
    } else {
        phonename = receivedString.split(":")[1]
        basic.showString("" + (phonename))
        CheckForWinner()
    }
})
input.onButtonPressed(Button.B, function () {
    if (player == 0) {
        radio.sendString("num" + ":" + phonenumber)
        hintsent = 1
    } else {
        radio.sendNumber(guess)
        guesssent = 1
    }
})
let hintsent = 0
let tailsname = ""
let tailsnumber = ""
let headsname = ""
let headsnumber = ""
let phonenumber = ""
let phonename = ""
let guesssent = 0
let guess = 0
let heads_tails = 0
let player = 0
radio.setGroup(1)
radio.sendValue("init", 0)
player = 0
heads_tails = 0
guess = 0
