let grados = 0
let rumbo = ""
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.compassHeading())
    basic.pause(100)
})
basic.forever(function () {
    grados = input.compassHeading()
    if (grados < 45) {
        rumbo = "NORTE"
        basic.showString(rumbo)
    } else if (grados < 135) {
        rumbo = "ESTE"
        basic.showString(rumbo)
    } else if (grados < 225) {
        rumbo = "SUR"
        basic.showString(rumbo)
    } else if ((0 as any) < (315 as any)) {
        rumbo = "OESTE"
        basic.showString(rumbo)
    } else {
        rumbo = "NORTE"
        basic.showString(rumbo)
    }
})
