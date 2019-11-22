import pygame
import time
pygame.init()
pygame.font.init()


BLACK = (0, 0, 0)
BLUE = (36, 207, 237)#this thing has 30% cpu usage, probably do something about that
RED = (246, 221, 73)#currently working, base game music and boosting
#todo add loading screen explaning rules    add sound effects for boost and collisions figure out and fix bike disapering when boosting

playerOneL = pygame.image.load('blueL.jpg')
playerOneR = pygame.image.load('blueR.jpg')
playerOneU = pygame.image.load('blueU.jpg')
playerOneD = pygame.image.load('blueD.jpg')
playerTwoL= pygame.image.load('orangeL.jpg')
playerTwoD = pygame.image.load('orangeD.jpg')
playerTwoR = pygame.image.load('orangeR.jpg')
playerTwoU = pygame.image.load('orangeU.jpg')

song = 'wilds.ogg'

pygame.mixer.init()
pygame.mixer.music.load(song)

pygame.mixer.music.play(-1)

class Player:
    def __init__(self, x, y, d, c):
        self.x = x
        self.y = y
        self.dir = d
        self.col = c

        self.rect = pygame.Rect(self.x - 1, self.y - 1, 2, 2)

    def __draw__(self):
        self.rect = pygame.Rect(self.x - 1, self.y - 1, 2, 2) 
        pygame.draw.rect(screen, self.col, self.rect, 0)
        if self.col == RED:
            if self.dir == (-2*x, 0):#Left
                screen.blit(playerOneL, (self.x-30, self.y-10))
            if self.dir == (2*x, 0):#Right
                screen.blit(playerOneR, (self.x-20, self.y-10))
            if self.dir == (0, -2*x):#Up
                screen.blit(playerOneU, (self.x-8, self.y-30))
            if self.dir == (0, 2*x):#Down
                screen.blit(playerOneD, (self.x-10, self.y-10))

        elif self.col == BLUE:
            if self.dir == (-2*y, 0):#Left good
                screen.blit(playerTwoL, (self.x-30, self.y-10))
            if self.dir == (2*y, 0):#Right
                screen.blit(playerTwoR, (self.x-10, self.y-10))
            if self.dir == (0, -2*y):#Up
                screen.blit(playerTwoU, (self.x-12, self.y-30))
            if self.dir == (0, 2*y):#Down
                screen.blit(playerTwoD, (self.x-10, self.y-10))

    def __update__(self):
            self.x += self.dir[0]
            self.y += self.dir[1]

def new_game():

    new_p1 = Player(50, 600 / 2, (2, 0), RED)
    new_p2 = Player(600 - 50, 600 / 2, (-2, 0), BLUE)
    return new_p1, new_p2

screen = pygame.display.set_mode((600, 600))

clock = pygame.time.Clock()
check_time = time.time()

objects = list()
path = list()
p1 = Player(50, (600) / 2, (2, 0), RED)  
p2 = Player(600 - 50, (600) / 2, (-2, 0), BLUE)
objects.append(p1)
path.append((p1.rect, '1'))
objects.append(p2)
path.append((p2.rect, '2'))

player_score = [0, 0]

wall_rects = [pygame.Rect([0, 60, 15, 600]) , pygame.Rect([0, 60, 600, 15]),\
              pygame.Rect([600 - 15, 60, 15, 600]),\
              pygame.Rect([0, 600 - 15, 600, 15])]

new = False
done = False

x = 1
y = 1


def load_screen():
    v = False
    while v == False:
        event = pygame.event.wait()

        screen.fill(BLACK) 

        font = pygame.font.Font('freesansbold.ttf', 32) 
        text = font.render("Welcome To Tron", True, BLUE) 
        textRect = text.get_rect() 
        textRect.center = (300, 200) 
        screen.blit(text, textRect) 

        font = pygame.font.Font('freesansbold.ttf', 16) 
        text = font.render("Press any key to continue", True, BLUE) 
        textRect = text.get_rect() 
        textRect.center = (300, 300) 
        screen.blit(text, textRect) 
        pygame.display.update()

        if event.type == pygame.KEYDOWN:
            v = True    

load_screen()

while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:  # close button pressed
            done = True
        elif event.type == pygame.KEYDOWN:

            if event.key == pygame.K_LSHIFT:
                x = 2
                print("you could be boosting")
            if event.key == pygame.K_RSHIFT:
                y = 2
                print("you could be boosting")
            
          
            if event.key == pygame.K_w:
                objects[0].dir = (0, -2*x)
            elif event.key == pygame.K_s:
                objects[0].dir = (0, 2*x)
            elif event.key == pygame.K_a:
                objects[0].dir = (-2*x, 0)
            elif event.key == pygame.K_d:
                objects[0].dir = (2*x, 0)

            if event.key == pygame.K_UP:
                objects[1].dir = (0, -2*y)
            elif event.key == pygame.K_DOWN:
                objects[1].dir = (0, 2*y)
            elif event.key == pygame.K_LEFT:
                objects[1].dir = (-2*y, 0)
            elif event.key == pygame.K_RIGHT:
                objects[1].dir = (2*y, 0)

    screen.fill(BLACK) 
    tim = pygame.time.get_ticks()
    if tim%50 == 0:
        x = 1
        y = 1

    for r in wall_rects: pygame.draw.rect(screen, (50, 50, 50), r, 0) 

    for o in objects:

        if (o.rect, '1') in path or (o.rect, '2') in path \
           or o.rect.collidelist(wall_rects) > -1:
            if (time.time() - check_time) >= 0.1:
                check_time = time.time()

                if o.col == RED:
                    player_score[1] += 1
                else: player_score[0] += 1

                new = True
                new_p1, new_p2 = new_game()
                objects = [new_p1, new_p2]
                path = [(p1.rect, '1'), (p2.rect, '2')]
        else: 
            if o.col == BLUE:
                path.append((o.rect, '1'))
            else:
                path.append((o.rect, '2'))

        o.__draw__()
        o.__update__()

    for r in path:
        if new is True:
            path = []
            new = False
            break
        if r[1] == '1': pygame.draw.rect(screen, RED, r[0], 1)
        else: pygame.draw.rect(screen, BLUE, r[0], 1)
    
    font = pygame.font.Font('freesansbold.ttf', 32) 
    score1 = "{}".format(player_score[1])
    text = font.render(score1, True, RED) 
    textRect = text.get_rect() 
    textRect.center = (40, 100) 
    screen.blit(text, textRect) 

    score = ": {}".format(player_score[0])
    text = font.render(score, True, BLUE) 
    textRect = text.get_rect() 
    textRect.center = (70, 100) 
    screen.blit(text, textRect) 


    pygame.display.update() 
    clock.tick(60)  
pygame.quit()