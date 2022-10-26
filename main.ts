input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # . # .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        . # . # .
        # # . # #
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        # # . # #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . # . # .
        # . . . #
        # . . . #
        # . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    while (false) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
