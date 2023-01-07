input.onSound(DetectedSound.Loud, function () {
    if (ismoving == 0) {
        ismoving = 1
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
    } else if (ismoving == 1) {
        ismoving = 0
        basic.clearScreen()
        Kitronik_Move_Motor.stop()
    }
})
let ismoving = 0
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
ismoving = 0
input.setSoundThreshold(SoundThreshold.Loud, 255)
basic.forever(function () {
    if (ismoving == 0) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 20)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (Kitronik_Move_Motor.measure() <= 5) {
        Kitronik_Move_Motor.stop()
        basic.showIcon(IconNames.No)
    }
})
