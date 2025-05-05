# SmellyRover Technical Debt

This document tracks known technical debt in the SmellyRover project. Use this as a reference to identify areas that require improvement, prioritization, or refactoring.

## :bookmark: Labels

[ ] Not covered: Rover constructor called without any input
[ ] class Position should not be an exported class, but Rover could keep track of state itself
[ ] improve public interface of Rover (names like XYD are unclear)
[X] public get XYD and public pos basically do the same thing...
[ ] getPositionAsString could belong to Position class
[ ] use enum for commands L, R and M

[ ] use enum for directions N, S, E and W
    [x] create enum Direction
    [ ] use enum in Position class
        [x] move Position to Rover.ts to stay away from exporting


[ ] improve turnLeft and turnRight code when we have enum for Direction, creating a lookup function
