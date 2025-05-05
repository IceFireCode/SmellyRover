import { Position } from './Position';

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
      if (this.currentPosition.direction === 'E') {
        this.currentPosition.direction = 'S';
      } else if (this.currentPosition.direction === 'S') {
        this.currentPosition.direction = 'W';
      } else if (this.currentPosition.direction === 'W') {
        this.currentPosition.direction = 'N';
      } else if (this.currentPosition.direction === 'N') {
        this.currentPosition.direction = 'E';
      }
    } else if (command === 'M') {
      if (this.currentPosition.direction === 'E') {
        this.currentPosition.x++;
      }
      if (this.currentPosition.direction === 'S') {
        this.currentPosition.y--;
      }
      if (this.currentPosition.direction === 'W') {
        this.currentPosition.x--;
      }
      if (this.currentPosition.direction === 'N') {
        this.currentPosition.y++;
      }
    }
  }

  private turnLeft() {
    if (this.currentPosition.direction === 'E') {
      this.currentPosition.direction = 'N';
    } else if (this.currentPosition.direction === 'N') {
      this.currentPosition.direction = 'W';
    } else if (this.currentPosition.direction === 'W') {
      this.currentPosition.direction = 'S';
    } else if (this.currentPosition.direction === 'S') {
      this.currentPosition.direction = 'E';
    }
  }
}
