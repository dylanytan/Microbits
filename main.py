# function to show score
def showScore():
    global compScore, playerScore
    basic.show_number(playerScore)
    basic.pause(100)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(50)
    basic.show_number(compScore)
    basic.pause(100)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)

def on_button_pressed_a():
    if choosen == 4:
        choosen = 0
    elif choosen != 4:
        choosen += 1
input.on_button_pressed(Button.A, on_button_pressed_a)


    

def startTurn():
    global choosen, playerScore, compScore
    choosen = 0
    while not (bpress):
        shownimage = imagelist[choosen]
        shownimage.show_image(0)
        if input.button_is_pressed(Button.A):
            if choosen == 4:
                choosen = 0
            elif choosen != 4:
                choosen += 1
        if input.button_is_pressed(Button.B):
            bpress = True
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
    basic.pause(100)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(50)
    shownimage = imagelist[choosen]
    shownimage.show_image(0)
    basic.pause(50)
    botChoice = randint(0, 4)
    compImage = imagelist[botChoice]
    for index in range(3):
        compImage.show_image(0)
        basic.pause(30)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.pause(10)
    
    if winMatrix[choosen][botChoice] == 1:
        playerScore += 1
    if winMatrix[choosen][botChoice] == 2:
        compScore += 1
    

        

"""

on run code

"""
compImage: Image = None
bpress = False
choosen = 0
compScore = 0
playerScore = 0
imagelist: List[Image] = []

rock = images.create_image("""
    . . . . .
    . # # # .
    # # # # #
    . # # # .
    . . . . .
    """)
paper = images.create_image("""
    . . . . .
    . . # # .
    . # # # #
    # # # # .
    . # # . .
    """)
scissor = images.create_image("""
    . . # . .
    . . # # #
    # # # . .
    # . # . .
    . # . . .
    """)
lizard = images.create_image("""
    . . . . .
    . # . . .
    . # . . .
    . # . . .
    . # # # .
    """)
spock = images.create_image("""
    . . # # .
    . # . . .
    . # # # .
    . . . # .
    . # # . .
    """)
imagelist = [rock, paper, scissor, lizard, spock]
playerScore = 0
compScore = 0
showScore()

winMatrix = [[0,2,1,1,2],[1,0,2,2,1],[2,1,0,1,2],[2,1,2,0,1],[1,2,1,2,0]]

while playerScore < 9 and compScore < 9:
    startTurn()
    showScore()