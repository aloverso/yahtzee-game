export class YahtzeeGame {
  totalScore: number;

  constructor() {
    this.totalScore = 0;
  }

  roll(diceValues: number[]): void {
    this.sumOfOnes(diceValues);
  }

  score(): number {
    return this.totalScore;
  }

  private sumOfOnes(diceValues: number[]): void {
    const score = diceValues.
      filter((val) => val === 1).
      reduce((partial, acc) => partial + acc, 0);
    this.totalScore += score;
  }

}


