import pygame
import time
pygame.init()

BLACK = (0, 0, 0)
RED = (36, 207, 237)
BLUE = (246, 221, 73)

playerOneL = pygame.image.load('blueL.jpg')
playerOneR = pygame.image.load('blueR.jpg')
playerOneU = pygame.image.load('blueU.jpg')
playerOneD = pygame.image.load('blueD.jpg')
playerTwoL= pygame.image.load('orangeL.jpg')
playerTwoD = pygame.image.load('orangeD.jpg')
playerTwoR = pygame.image.load('orangeR.jpg')
playerTwoU = pygame.image.load('orangeU.jpg')

class Player:
    def __init__(self, x, y, d, c):
        self.x = x
        self.y = y
        self.speed = 1
        self.dir = d
        self.col = c

        self.rect = pygame.Rect(self.x - 1, self.y - 1, 2, 2)

    def __draw__(self):
        self.rect = pygame.Rect(self.x - 1, self.y - 1, 2, 2) 
        pygame.draw.rect(screen, self.col, self.rect, 0)
        if self.col == BLUE:
            if self.dir == (-2, 0):#Left good
                screen.blit(playerOneL, (self.x-30, self.y-10))#Refractor ccode
            if self.dir == (2, 0):#Right
                screen.blit(playerOneR, (self.x-20, self.y-10))
            if self.dir == (0, -2):#Up
                screen.blit(playerOneU, (self.x-8, self.y-30))
            if self.dir == (0, 2):#Down
                screen.blit(playerOneD, (self.x-10, self.y-10))

        if self.col == RED:
            if self.dir == (-2, 0):#Left good
                screen.blit(playerTwoL, (self.x-30, self.y-10))
            if self.dir == (2, 0):#Right
                screen.blit(playerTwoR, (self.x-10, self.y-10))
            if self.dir == (0, -2):#Up
                screen.blit(playerTwoU, (self.x-12, self.y-30))
            if self.dir == (0, 2):#Down
                screen.blit(playerTwoD, (self.x-10, self.y-10))

    def __update__(self):
            self.x += self.dir[0]
            self.y += self.dir[1]


def new_game():
    new_p1 = Player(50, 600 / 2, (2, 0), RED)
    new_p2 = Player(600 - 50, 600 / 2, (-2, 0), BLUE)
    return new_p1, new_p2


screen = pygame.display.set_mode((600, 600))

font = pygame.font.Font(None, 72)

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

player_score = [0, 0]  # current player score

wall_rects = [pygame.Rect([0, 60, 15, 600]) , pygame.Rect([0, 60, 600, 15]),\
              pygame.Rect([600 - 15, 60, 15, 600]),\
              pygame.Rect([0, 600 - 15, 600, 15])]

done = False
new = False

while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:  # close button pressed
            done = True
        elif event.type == pygame.KEYDOWN:
          
            if event.key == pygame.K_w:
                objects[0].dir = (0, -2)
            elif event.key == pygame.K_s:
                objects[0].dir = (0, 2)
            elif event.key == pygame.K_a:
                objects[0].dir = (-2, 0)
            elif event.key == pygame.K_d:
                objects[0].dir = (2, 0)

            if event.key == pygame.K_UP:
                objects[1].dir = (0, -2)
            elif event.key == pygame.K_DOWN:
                objects[1].dir = (0, 2)
            elif event.key == pygame.K_LEFT:
                objects[1].dir = (-2, 0)
            elif event.key == pygame.K_RIGHT:
                objects[1].dir = (2, 0)

    screen.fill(BLACK)  # clears the screen

    for r in wall_rects: pygame.draw.rect(screen, (42, 42, 42), r, 0)  # draws the walls

    for o in objects:

        if (o.rect, '1') in path or (o.rect, '2') in path \
           or o.rect.collidelist(wall_rects) > -1:  # collided with path or wall
            # prevent player from hitting the path they just made
            if (time.time() - check_time) >= 0.1:
                check_time = time.time()

                if o.col == RED:
                    player_score[1] += 1
                else: player_score[0] += 1

                new = True
                new_p1, new_p2 = new_game()
                objects = [new_p1, new_p2]
                path = [(p1.rect, '1'), (p2.rect, '2')]
                break
        else:  # not yet traversed
            path.append((o.rect, '1')) if o.col == BLUE else path.append((o.rect, '2'))

        o.__draw__()
        o.__update__()

    for r in path:
        if new is True:
            path = []
            new = False
            break
        if r[1] == '1': pygame.draw.rect(screen, RED, r[0], 0)
        else: pygame.draw.rect(screen, BLUE, r[0], 0)

    # display the current score on the screen
    # score_text = font.render('{0} : {1}'.format(player_score[0], player_score[1]), 1, (255, 153, 51))
    # score_text_pos = score_text.get_rect()
    # score_text_pos.centerx = int(600 / 2)
    # score_text_pos.centery = int(600 / 2)
    # screen.blit(score_text, score_text_pos)

    pygame.display.flip()  # flips display
    clock.tick(60)  # regulates FPS

pygame.quit()