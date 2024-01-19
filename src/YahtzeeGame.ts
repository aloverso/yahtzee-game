export class YahtzeeGame {
  totalScore: number;

  constructor() {
    this.totalScore = 0;
  }

  roll(diceValues: number[]): void {
    const categoryScorer =  new Categories(diceValues);
    this.totalScore += categoryScorer.sumOfOnes();
  }

  score(): number {
    return this.totalScore;
  }
}


export class Categories {
  diceValues: number[];

  constructor(diceValues: number[]) {
    this.diceValues = diceValues;
  }

  private sumOfNumber(num: number): number {
    return this.diceValues.
      filter((val) => val === num).
      reduce((partial, acc) => partial + acc, 0);
  }

  sumOfOnes(): number {
    return this.sumOfNumber(1)
  }

  sumOfTwos(): number {
    return this.sumOfNumber(2)
  }

  sumOfThrees(): number {
    return this.sumOfNumber(3)
  }

  sumOfFours(): number {
    return this.sumOfNumber(4)
  }

  sumOfFives(): number {
    return this.sumOfNumber(5)
  }

  sumOfSixes(): number {
    return this.sumOfNumber(6)
  }

  sumOfThreeOfAKind(): number {
    return 0;
  }
}

// export class ScoreCard {
//   onesScore
//   twosScore
// }