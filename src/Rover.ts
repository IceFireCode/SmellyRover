import { RoverState } from './RoverState';

export class Rover {
  private currentPosition: RoverState = new RoverState();

  constructor(p: string = '') {
    const s = p.split(' ');
    if (s.length >= 3) {
      this.currentPosition.xx = parseInt(s[0], 10);
      this.currentPosition.yy = parseInt(s[1], 10);
      this.currentPosition.dd = s[2][0];
    }
  }

  public go(cms: string): void {
    for (let i = 0; i < cms.length; i++) {
      const c = cms[i];
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

  public get XYD(): string {
    return `${this.currentPosition.xx} ${this.currentPosition.yy} ${this.currentPosition.dd}`;
  }

  public pos(): string {
    return this.XYD;
  }
}
