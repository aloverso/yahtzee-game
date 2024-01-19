export class YahtzeeGame {
  totalScore: number;
  categoryScorer: Categories;

  constructor() {
    this.totalScore = 0;
    this.categoryScorer = new Categories();
  }

  roll(diceValues: number[]): void {
    this.totalScore += this.categoryScorer.sumOfOnes(diceValues);
  }

  score(): number {
    return this.totalScore;
  }
}


export class Categories {
  sumOfOnes(diceValues: number[]): number {
    return diceValues.
      filter((val) => val === 1).
      reduce((partial, acc) => partial + acc, 0);
  }

  sumOfTwos(diceValues: number[]): number {
    return diceValues.
      filter((val) => val === 2).
      reduce((partial, acc) => partial + acc, 0);
  }
}

// export class ScoreCard {
//   onesScore
//   twosScore
// }