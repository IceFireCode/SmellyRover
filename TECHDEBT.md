# SmellyRover Technical Debt

This document tracks known technical debt in the SmellyRover project. Use this as a reference to identify areas that require improvement, prioritization, or refactoring.

## :bookmark: Labels

[ ] Not covered: Rover constructor called without any input
[x] class Position should not be an exported class, but Rover could keep track of state itself
[ ] improve public interface of Rover (names like XYD are unclear)
[X] public get XYD and public pos basically do the same thing...
[ ] getPositionAsString could belong to Position class
[ ] test uncovered code throwing error when a command is not valid
[ ] test uncovered code throwing error when a direction is not valid
[x] get rid of else cases in executeSingleCommand

[x] use enum for commands L, R and M
    [x] create enum Command
    [x] use enum in executeSingleCommand
        [x] use enum in turn function
            [x] in executeSingleCommand line 39, use Command
            [x] in executeSingleCommand line 41, use Command
    [x] use enum in executeCommands

[X] use enum for directions N, S, E and W
    [x] create enum Direction
    [x] use enum in Position class
        [x] src/Rover.ts:25:7 - error TS2322: Type 'string' is not assignable to type 'Direction'.
        [x] src/Rover.ts:63:7 - error TS2322: Type '"S"' is not assignable to type 'Direction'.
        [x] src/Rover.ts:65:7 - error TS2322: Type '"W"' is not assignable to type 'Direction'.
        [x] src/Rover.ts:67:7 - error TS2322: Type '"N"' is not assignable to type 'Direction'.
        [x] src/Rover.ts:69:7 - error TS2322: Type '"E"' is not assignable to type 'Direction'.
        [x] src/Rover.ts:75:7 - error TS2322: Type '"N"' is not assignable to type 'Direction'.
        [x] src/Rover.ts:77:7 - error TS2322: Type '"W"' is not assignable to type 'Direction'.
        [x] src/Rover.ts:79:7 - error TS2322: Type '"S"' is not assignable to type 'Direction'.
        [x] src/Rover.ts:81:7 - error TS2322: Type '"E"' is not assignable to type 'Direction'.
        [x] src/Rover.ts:96:3 - error TS2322: Type '"N"' is not assignable to type 'Direction'.
        [x] move Position to Rover.ts to stay away from exporting


[x] improve turnLeft and turnRight code when we have enum for Direction, creating a lookup function
[x] merge turnLeft and turnRight functions
[x] create update direction function to reduce code duplication