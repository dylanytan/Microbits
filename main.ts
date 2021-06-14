//  function to show score
function showScore() {
    
    basic.showNumber(playerScore)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.showNumber(compScore)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let choosen: number;
    if (choosen == 4) {
        choosen = 0
    } else if (choosen != 4) {
        choosen += 1
    }
    
})
function startTurn() {
    let shownimage: Image;
    let bpress: boolean;
    
    choosen = 0
    while (!bpress) {
        shownimage = imagelist[choosen]
        shownimage.showImage(0)
        if (input.buttonIsPressed(Button.A)) {
            if (choosen == 4) {
                choosen = 0
            } else if (choosen != 4) {
                choosen += 1
            }
            
        }
        
        if (input.buttonIsPressed(Button.B)) {
            bpress = true
        }
        
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    shownimage = imagelist[choosen]
    shownimage.showImage(0)
    basic.pause(50)
    let botChoice = randint(0, 4)
    let compImage = imagelist[botChoice]
    for (let index = 0; index < 3; index++) {
        compImage.showImage(0)
        basic.pause(30)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(10)
    }
    if (winMatrix[choosen][botChoice] == 1) {
        playerScore += 1
    }
    
    if (winMatrix[choosen][botChoice] == 2) {
        compScore += 1
    }
    
}

/** on run code */
let compImage : Image = null
let bpress = false
let choosen = 0
let compScore = 0
let playerScore = 0
let imagelist : Image[] = []
let rock = images.createImage(`
    . . . . .
    . # # # .
    # # # # #
    . # # # .
    . . . . .
    `)
let paper = images.createImage(`
    . . . . .
    . . # # .
    . # # # #
    # # # # .
    . # # . .
    `)
let scissor = images.createImage(`
    . . # . .
    . . # # #
    # # # . .
    # . # . .
    . # . . .
    `)
let lizard = images.createImage(`
    . . . . .
    . # . . .
    . # . . .
    . # . . .
    . # # # .
    `)
let spock = images.createImage(`
    . . # # .
    . # . . .
    . # # # .
    . . . # .
    . # # . .
    `)
imagelist = [rock, paper, scissor, lizard, spock]
playerScore = 0
compScore = 0
showScore()
let winMatrix = [[0, 2, 1, 1, 2], [1, 0, 2, 2, 1], [2, 1, 0, 1, 2], [2, 1, 2, 0, 1], [1, 2, 1, 2, 0]]
while (playerScore < 9 && compScore < 9) {
    startTurn()
    showScore()
}
