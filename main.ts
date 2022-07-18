radio.onReceivedNumber(function (receivedNumber) {
    if (player == 0) {
        heads_tails = receivedNumber
        CheckForWinner()
        radio.sendString("" + (phonename))
    } else {
        guess = receivedNumber
        guesssent = 1
        if (hintsent == 1) {
            CheckForWinner()
            radio.sendNumber(heads_tails)
        }
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
    if (player == 0) {
        phonename = receivedString
        basic.showString("" + (phonename))
    } else {
        phonenumber = receivedString
        basic.showString("" + (phonenumber))
        hintsent = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (player == 0) {
        radio.sendString("" + (phonenumber))
        hintsent = 1
    } else {
        radio.sendNumber(guess)
        guesssent = 1
    }
})
let tailsname = ""
let tailsnumber = ""
let headsname = ""
let headsnumber = ""
let phonenumber = ""
let hintsent = 0
let guesssent = 0
let phonename = ""
let guess = 0
let heads_tails = 0
let player = 0
radio.setGroup(1)
radio.sendValue("init", 0)
player = 0
heads_tails = 0
guess = 0
