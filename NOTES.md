# Pomodoro Technique - :notebook: Notes from the journey :tomato: by :tomato:

## 🍅 Pomodoro 1

[x] remove unused G method, even though it's public. It is not tested.
[x] move class variable to the top of the class instead of the bottom
[WIP] read through the code, line by line, refactor on the fly

## 🍅 Pomodoro 2

[X] read through the code, line by line, refactor on the fly
[X] create plan to use an enum for Direction (North, South, East, West)
[X] use an enum for Direction (North, South, East, West)

## 🍅 Pomodoro 3

[x] improve turnLeft and turnRight code when we have enum for Direction, getting rid of else statements
[x] merge turnLeft and turnRight functions
[x] use an enum for Command (L, R, M)

## 🍅 Pomodoro 4

[x] use enum in executeCommands
[x] oops, improve getCommandFromString
[x] create function to update direction
[x] oops, Position is not using the Direction enum yet
[x] create helper functions for moving to a Direction

## 🍅 Pomodoro 5

[x] create helper functions for turning given a Direction
[x] get rid of else cases in executeSingleCommand
[x] think what is better: move away from Position class or move behaviour there?
[x] move updating position x and y to the Position class
    [x] move moving to the east
    [x] move moving to the west
    [x] move moving to the north
    [x] move moving to the south
[x] move updating the direction to the Position class

## 🍅 Pomodoro 6

[ ] 