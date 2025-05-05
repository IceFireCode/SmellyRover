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
      this.turnLeft();
    } else if (command === 'R') {
      this.turnRight();
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

  private turnRight() {
    const currentDirection = this.currentPosition.direction;

    if (currentDirection === Direction.East) {
      this.currentPosition.direction = Direction.South;
    }
    if (currentDirection === Direction.South) {
      this.currentPosition.direction = Direction.West;
    }
    if (currentDirection === Direction.West) {
      this.currentPosition.direction = Direction.North;
    }
    if (currentDirection === Direction.North) {
      this.currentPosition.direction = Direction.East;
    }
  }

  private turnLeft() {
    if (this.currentPosition.direction === Direction.East) {
      this.currentPosition.direction = Direction.North;
    } else if (this.currentPosition.direction === Direction.North) {
      this.currentPosition.direction = Direction.West;
    } else if (this.currentPosition.direction === Direction.West) {
      this.currentPosition.direction = Direction.South;
    } else if (this.currentPosition.direction === Direction.South) {
      this.currentPosition.direction = Direction.East;
    }
  }
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
