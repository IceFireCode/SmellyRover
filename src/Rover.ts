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

  public get XYD(): string {
    return this.getPositionAsString();
  }

  public pos(): string {
    return this.getPositionAsString();
  }

  private getPositionAsString() {
    return `${this.currentPosition.x} ${this.currentPosition.y} ${this.currentPosition.direction}`;
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
      if (c === 'L') {
        if (this.currentPosition.direction === 'E') {
          this.currentPosition.direction = 'N';
        } else if (this.currentPosition.direction === 'N') {
          this.currentPosition.direction = 'W';
        } else if (this.currentPosition.direction === 'W') {
          this.currentPosition.direction = 'S';
        } else if (this.currentPosition.direction === 'S') {
          this.currentPosition.direction = 'E';
        }
      } else if (c === 'R') {
        if (this.currentPosition.direction === 'E') {
          this.currentPosition.direction = 'S';
        } else if (this.currentPosition.direction === 'S') {
          this.currentPosition.direction = 'W';
        } else if (this.currentPosition.direction === 'W') {
          this.currentPosition.direction = 'N';
        } else if (this.currentPosition.direction === 'N') {
          this.currentPosition.direction = 'E';
        }
      } else if (c === 'M') {
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
  }
}
