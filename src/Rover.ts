export class Rover {
  private currentPosition: Position = new Position();

  constructor(startPosition: string = '') {
    const paramsToCreatePosition = startPosition.split(' ');
    this.setStartPositionIfInputIsValid(paramsToCreatePosition);
  }

  public go(commands: string): void {
    this.executeCommands(commands);
  }

  public pos(): string {
    return this.getPositionAsString();
  }

  private getPositionAsString() {
    const position = this.currentPosition;
    return `${position.x} ${position.y} ${position.direction}`;
  }

  private setStartPositionIfInputIsValid(paramsToCreatePosition: string[]) {
    if (paramsToCreatePosition.length >= 3) {
      this.currentPosition.x = parseInt(paramsToCreatePosition[0], 10);
      this.currentPosition.y = parseInt(paramsToCreatePosition[1], 10);
      this.currentPosition.direction = this.getDirectionFromString(
        paramsToCreatePosition[2][0]
      );
    }
  }

  private executeCommands(commands: string) {
    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      this.executeSingleCommand(this.getCommandFromString(command));
    }
  }

  private executeSingleCommand(command: Command) {
    if (command === Command.TurnLeft) {
      this.turn(Command.TurnLeft);
    }
    if (command === Command.TurnRight) {
      this.turn(Command.TurnRight);
    }
    if (command === Command.Move) {
      this.moveInCurrentDirection();
    }
  }

  private moveInCurrentDirection() {
    this.moveIfDirectionIsEast();
    this.moveIfDirectionIsSouth();
    this.moveIfDirectionIsWest();
    this.moveIfDirectionIsNorth();
  }

  private moveIfDirectionIsNorth() {
    if (this.currentPosition.direction === Direction.North) {
      this.currentPosition.y++;
    }
  }

  private turn(direction: Command.TurnLeft | Command.TurnRight) {
    const currentDirection = this.currentPosition.direction;
    const turnLeft = direction === 'L';

    this.turnIfCurrentDirectionIsEast(currentDirection, turnLeft);
    this.turnIfCurrentDirectionIsSouth(currentDirection, turnLeft);
    this.turnIfCurrentDirectionIsWest(currentDirection, turnLeft);
    this.turnIfCurrentDirectionIsNorth(currentDirection, turnLeft);
  }

  private turnIfCurrentDirectionIsNorth(
    currentDirection: Direction,
    turnLeft: boolean
  ) {
    if (currentDirection === Direction.North) {
      this.updateCurrentDirection(turnLeft ? Direction.West : Direction.East);
    }
  }

  private turnIfCurrentDirectionIsWest(
    currentDirection: Direction,
    turnLeft: boolean
  ) {
    if (currentDirection === Direction.West) {
      this.updateCurrentDirection(turnLeft ? Direction.South : Direction.North);
    }
  }

  private turnIfCurrentDirectionIsSouth(
    currentDirection: Direction,
    turnLeft: boolean
  ) {
    if (currentDirection === Direction.South) {
      this.updateCurrentDirection(turnLeft ? Direction.East : Direction.West);
    }
  }

  private turnIfCurrentDirectionIsEast(
    currentDirection: Direction,
    turnLeft: boolean
  ) {
    if (currentDirection === Direction.East) {
      this.updateCurrentDirection(turnLeft ? Direction.North : Direction.South);
    }
  }

  private moveIfDirectionIsWest() {
    if (this.currentPosition.direction === Direction.West) {
      this.currentPosition.x--;
    }
  }

  private moveIfDirectionIsSouth() {
    if (this.currentPosition.direction === Direction.South) {
      this.currentPosition.y--;
    }
  }

  private moveIfDirectionIsEast() {
    if (this.currentPosition.direction === Direction.East) {
      this.currentPosition.x++;
    }
  }

  private updateCurrentDirection(direction: Direction) {
    this.currentPosition.direction = direction;
  }

  private getCommandFromString(command: string): Command {
    switch (command) {
      case Command.Move:
        return Command.Move;
      case Command.TurnLeft:
        return Command.TurnLeft;
      case Command.TurnRight:
        return Command.TurnRight;
      default:
        throw new Error(`Invalid command: ${command}`);
    }
  }

  private getDirectionFromString(direction: string): Direction {
    switch (direction) {
      case Direction.North:
        return Direction.North;
      case Direction.East:
        return Direction.East;
      case Direction.South:
        return Direction.South;
      case Direction.West:
        return Direction.West;
      default:
        throw new Error(`Invalid direction: ${direction}`);
    }
  }
}

enum Command {
  Move = 'M',
  TurnLeft = 'L',
  TurnRight = 'R',
}

enum Direction {
  North = 'N',
  East = 'E',
  South = 'S',
  West = 'W',
}

class Position {
  x: number = 0;
  y: number = 0;
  direction: Direction = Direction.North;
}
