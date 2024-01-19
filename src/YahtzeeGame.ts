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
  histogram: {
    1: number,
    2: number,
    3: number,
    4: number,
    5: number,
    6: number
  }

  constructor(diceValues: number[]) {
    this.diceValues = diceValues;

    this.histogram = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0
    }

    for (const dice of this.diceValues) {
      this.histogram[dice] += 1;
    }
  }

  private sumAll(): number {
    return this.diceValues
      .reduce((partial, acc) => partial + acc, 0);
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

  scoreOfThreeOfAKind(): number {
    const hasThreeOfAKind = this.hasXOfAKind(3)
    return hasThreeOfAKind ? this.sumAll() : 0
  }

  scoreOfFourOfAKind(): number {
    const hasFourOfAKind = this.hasXOfAKind(4)
    return hasFourOfAKind ? this.sumAll() : 0
  }

  scoreFullHouse(): number {
    let twoOfAKindFound = false;
    let threeOfAKindFound = false;
    for (const val of Object.values(this.histogram)) {
      if (val === 2) {
        twoOfAKindFound = true
      } else if (val === 3) {
        threeOfAKindFound = true
      }
    }

    const hasFullHouse = twoOfAKindFound && threeOfAKindFound
    return hasFullHouse ? 25 : 0;
  }

  scoreSmallStraight(): number {
    const sortedDeduped = [...this.diceValues]
      .sort()
      .filter((it, i, original) => original.indexOf(i) === i)

    let isStraight = true

    for (let i=1; i<sortedDeduped.length, i++) {
      const prev = sortedDeduped[i-1]
      const curr = sortedDeduped[i]
      if (curr - prev !== 1) {
        isStraight = false;
      }
    }
  }

  private hasXOfAKind(x: number): boolean {
    return Object.values(this.histogram).some(it => it >= x)
  }
}

// export class ScoreCard {
//   onesScore
//   twosScore
// }