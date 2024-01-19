type Round = {};

export class YahtzeeGame {
  runningScore: number;
  constructor() {
    this.runningScore = 0;
  }

  roll(round: number[]): void {}

  score(): number {
    return this.runningScore;
  }
}
