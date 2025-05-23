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
      this.currentPosition.moveInCurrentDirection();
    }
  }
  private turn(direction: Command.TurnLeft | Command.TurnRight) {
    direction === Command.TurnLeft
      ? this.currentPosition.turnLeft()
      : this.currentPosition.turnRight();
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

  moveInCurrentDirection() {
    this.moveIfDirectionIsEast();
    this.moveIfDirectionIsNorth();
    this.moveIfDirectionIsWest();
    this.moveIfDirectionIsSouth();
  }

  turnLeft() {
    this.direction = this.getLeftDirection();
  }
  turnRight() {
    this.direction = this.getRightDirection();
  }

  private getLeftDirection(): Direction {
    if (this.direction === Direction.North) {
      return Direction.West;
    }
    if (this.direction === Direction.East) {
      return Direction.North;
    }
    if (this.direction === Direction.South) {
      return Direction.East;
    }
    if (this.direction === Direction.West) {
      return Direction.South;
    }
    throw Error(`Invalid direction: ${this.direction}`);
  }

  private getRightDirection(): Direction {
    if (this.direction === Direction.North) {
      return Direction.East;
    }
    if (this.direction === Direction.East) {
      return Direction.South;
    }
    if (this.direction === Direction.South) {
      return Direction.West;
    }
    if (this.direction === Direction.West) {
      return Direction.North;
    }
    throw Error(`Invalid direction: ${this.direction}`);
  }

  private moveIfDirectionIsEast() {
    if (this.direction === Direction.East) {
      this.x++;
    }
  }

  private moveIfDirectionIsNorth() {
    if (this.direction === Direction.North) {
      this.y++;
    }
  }

  private moveIfDirectionIsWest() {
    if (this.direction === Direction.West) {
      this.x--;
    }
  }

  private moveIfDirectionIsSouth() {
    if (this.direction === Direction.South) {
      this.y--;
    }
  }
}
