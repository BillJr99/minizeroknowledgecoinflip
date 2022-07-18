input.onButtonPressed(Button.A, function () {
    heads_tails = (heads_tails + 1) % 2
    if (heads_tails == 0) {
        phonenumber = "2155551212"
        phonename = "Harriet Smith"
    } else {
        phonenumber = "2155553434"
        phonename = "Thomas Lee"
    }
})
input.onButtonPressed(Button.AB, function () {
    player = (player + 1) % 2
    basic.showNumber(player)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("hint", phonenumber)
})
radio.onReceivedValue(function (name, value) {
    if (name == "guess") {
    	
    }
})
let phonename = ""
let phonenumber = 0
let heads_tails = 0
let player = 0
radio.setGroup(1)
player = 0
heads_tails = 0
basic.forever(function () {
	
})
