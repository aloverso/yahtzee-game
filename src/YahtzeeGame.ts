export class YahtzeeGame {
  totalScore: number;

  constructor() {
    this.totalScore = 0;
  }

  roll(dice: number[]): void {
    for (let die of dice) {
      if (die === 1) {
        this.totalScore = this.totalScore + die;
      }
      if (die === 2) {
        this.totalScore = this.totalScore + die;
      }
    }
  }

  score(): number {
    return this.totalScore;
  }
}
