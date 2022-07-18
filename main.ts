radio.onReceivedNumber(function (receivedNumber) {
    if (player == 0) {
        guess = receivedNumber
        guesssent = 1
        if (hintsent == 1) {
            radio.sendNumber(heads_tails)
        }
    } else {
        heads_tails = receivedNumber
    }
    if (hintsent == 1 && guesssent == 1) {
        if (guess == heads_tails) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }
        radio.sendString(phonename)
    }
})
input.onButtonPressed(Button.A, function () {
    if (player == 0) {
        heads_tails = (heads_tails + 1) % 2
        if (heads_tails == 0) {
            phonenumber = "2155551212"
            phonename = "Harriet Smith"
            basic.showIcon(IconNames.Heart)
        } else {
            phonenumber = "2155553434"
            phonename = "Thomas Lee"
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
})
input.onButtonPressed(Button.AB, function () {
    player = (player + 1) % 2
    basic.showNumber(player)
    hintsent = 0
    guesssent = 0
})
radio.onReceivedString(function (receivedString) {
    if (player == 0) {
        phonenumber = receivedString
        basic.showString(phonenumber)
        hintsent = 1
    } else {
        phonename = receivedString
        basic.showString(phonename)
    }
})
input.onButtonPressed(Button.B, function () {
    if (player == 0) {
        radio.sendString(phonenumber)
        hintsent = 1
    } else {
        radio.sendNumber(guess)
        guesssent = 1
    }
})
let phonenumber = ""
let phonename = ""
let hintsent = 0
let guesssent = 0
let guess = 0
let heads_tails = 0
let player = 0
radio.setGroup(1)
player = 0
heads_tails = 0
guess = 0
