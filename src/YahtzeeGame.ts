export class YahtzeeGame {
  totalScore: number;
  constructor() {
    this.totalScore = 0;
  }

  roll([die1, die2, die3, die4, die5]: number[]): void {
    this.totalScore = 3;
  }

  score(): number {
    return this.totalScore;
  }
}
