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
    return `${this.currentPosition.xx} ${this.currentPosition.yy} ${this.currentPosition.dd}`;
  }

  public pos(): string {
    return this.XYD;
  }

  private setStartPositionIfInputIsValid(paramsToCreatePosition: string[]) {
    if (paramsToCreatePosition.length >= 3) {
      this.currentPosition.xx = parseInt(paramsToCreatePosition[0], 10);
      this.currentPosition.yy = parseInt(paramsToCreatePosition[1], 10);
      this.currentPosition.dd = paramsToCreatePosition[2][0];
    }
  }

  private executeCommands(commands: string) {
    for (let i = 0; i < commands.length; i++) {
      const c = commands[i];
      if (c === 'L') {
        if (this.currentPosition.dd === 'E') {
          this.currentPosition.dd = 'N';
        } else if (this.currentPosition.dd === 'N') {
          this.currentPosition.dd = 'W';
        } else if (this.currentPosition.dd === 'W') {
          this.currentPosition.dd = 'S';
        } else if (this.currentPosition.dd === 'S') {
          this.currentPosition.dd = 'E';
        }
      } else if (c === 'R') {
        if (this.currentPosition.dd === 'E') {
          this.currentPosition.dd = 'S';
        } else if (this.currentPosition.dd === 'S') {
          this.currentPosition.dd = 'W';
        } else if (this.currentPosition.dd === 'W') {
          this.currentPosition.dd = 'N';
        } else if (this.currentPosition.dd === 'N') {
          this.currentPosition.dd = 'E';
        }
      } else if (c === 'M') {
        if (this.currentPosition.dd === 'E') {
          this.currentPosition.xx++;
        }
        if (this.currentPosition.dd === 'S') {
          this.currentPosition.yy--;
        }
        if (this.currentPosition.dd === 'W') {
          this.currentPosition.xx--;
        }
        if (this.currentPosition.dd === 'N') {
          this.currentPosition.yy++;
        }
      }
    }
  }
}
