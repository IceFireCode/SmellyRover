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
      this.currentPosition.direction = paramsToCreatePosition[2][0];
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
    } else if (command === Command.TurnRight) {
      this.turn(Command.TurnRight);
    } else if (command === Command.Move) {
      this.moveInCurrentDirection();
    }
  }

  private moveInCurrentDirection() {
    if (this.currentPosition.direction === Direction.East) {
      this.currentPosition.x++;
    }
    if (this.currentPosition.direction === Direction.South) {
      this.currentPosition.y--;
    }
    if (this.currentPosition.direction === Direction.West) {
      this.currentPosition.x--;
    }
    if (this.currentPosition.direction === Direction.North) {
      this.currentPosition.y++;
    }
  }

  private turn(direction: Command.TurnLeft | Command.TurnRight) {
    const currentDirection = this.currentPosition.direction;
    const turnLeft = direction === 'L';

    if (currentDirection === Direction.East) {
      this.currentPosition.direction = turnLeft
        ? Direction.North
        : Direction.South;
    }
    if (currentDirection === Direction.South) {
      this.currentPosition.direction = turnLeft
        ? Direction.East
        : Direction.West;
    }
    if (currentDirection === Direction.West) {
      this.currentPosition.direction = turnLeft
        ? Direction.South
        : Direction.North;
    }
    if (currentDirection === Direction.North) {
      this.currentPosition.direction = turnLeft
        ? Direction.West
        : Direction.East;
    }
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
  direction: string = Direction.North;
}
