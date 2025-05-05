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
      const c = commands[i];
      this.executeSingleCommand(c);
    }
  }

  private executeSingleCommand(command: string) {
    if (command === 'L') {
      this.turn(Command.TurnLeft);
    } else if (command === 'R') {
      this.turn(Command.TurnRight);
    } else if (command === 'M') {
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
