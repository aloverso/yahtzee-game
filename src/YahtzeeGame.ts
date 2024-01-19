type ScoreCategory =
  | "ones"
  | "twos"
  | "threes"
  | "fours"
  | "fives"
  | "sixes"
  | "threeOfAKind"
  | "fourOfAKind"
  | "fullHouse"
  | "smallStraight"
  | "largeStraight"
  | "yahtzee"
  | "chance";

interface ScoreSheet {
  [key: string]: number | null;
}

export class YahtzeeGame {
  private scoreSheet: ScoreSheet;
  totalScore: number;

  constructor() {
    this.totalScore = 0;
    this.scoreSheet = {
      ones: null,
      twos: null,
      threes: null,
      fours: null,
      fives: null,
      sixes: null,
      threeOfAKind: null,
      fourOfAKind: null,
      fullHouse: null,
      smallStraight: null,
      largeStraight: null,
      yahtzee: null,
      chance: null,
    };
  }

  roll(diceValues: number[]): void {
    const categoryScorer = new Categories(diceValues);
    this.totalScore += categoryScorer.sumOfOnes();
  }

  score(): number {
    return this.totalScore;
  }
}

export class Categories {
  diceValues: number[];
  histogram: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
  };

  constructor(diceValues: number[]) {
    this.diceValues = diceValues;

    this.histogram = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
    };

    for (const dice of this.diceValues) {
      this.histogram[dice] += 1;
    }
  }

  private sumAll(): number {
    return this.diceValues.reduce((partial, acc) => partial + acc, 0);
  }

  private sumOfNumber(num: number): number {
    return this.diceValues
      .filter((val) => val === num)
      .reduce((partial, acc) => partial + acc, 0);
  }

  sumOfOnes(): number {
    return this.sumOfNumber(1);
  }

  sumOfTwos(): number {
    return this.sumOfNumber(2);
  }

  sumOfThrees(): number {
    return this.sumOfNumber(3);
  }

  sumOfFours(): number {
    return this.sumOfNumber(4);
  }

  sumOfFives(): number {
    return this.sumOfNumber(5);
  }

  sumOfSixes(): number {
    return this.sumOfNumber(6);
  }

  scoreOfThreeOfAKind(): number {
    const hasThreeOfAKind = this.hasXOfAKind(3);
    return hasThreeOfAKind ? this.sumAll() : 0;
  }

  scoreOfFourOfAKind(): number {
    const hasFourOfAKind = this.hasXOfAKind(4);
    return hasFourOfAKind ? this.sumAll() : 0;
  }

  scoreFullHouse(): number {
    let twoOfAKindFound = false;
    let threeOfAKindFound = false;
    for (const val of Object.values(this.histogram)) {
      if (val === 2) {
        twoOfAKindFound = true;
      } else if (val === 3) {
        threeOfAKindFound = true;
      }
    }

    const hasFullHouse = twoOfAKindFound && threeOfAKindFound;
    return hasFullHouse ? 25 : 0;
  }

  scoreSmallStraight(): number {
    let isSmallStraight = false;
    if (this.histogram["3"] > 0 && this.histogram["4"] > 0) {
      if (this.histogram["1"] > 0) {
        isSmallStraight = this.histogram["2"] > 0;
      } else if (this.histogram["2"] > 0) {
        isSmallStraight = this.histogram["5"] > 0;
      } else if (this.histogram["5"] > 0) {
        isSmallStraight = this.histogram["6"] > 0;
      }
    }
    return isSmallStraight ? 30 : 0;
  }

  scoreLargeStraight(): number {
    let isLargeStraight = false;
    if (
      this.histogram["2"] > 0 &&
      this.histogram["3"] > 0 &&
      this.histogram["4"] > 0 &&
      this.histogram["5"] > 0
    ) {
      isLargeStraight = this.histogram["1"] > 0 || this.histogram["6"] > 0;
    }
    return isLargeStraight ? 40 : 0;
  }

  scoreYahtzee(): number {
    const isYahtzee = this.hasXOfAKind(5);
    return isYahtzee ? 50 : 0;
  }

  scoreChance(): number {
    return this.sumAll();
  }

  private hasXOfAKind(x: number): boolean {
    return Object.values(this.histogram).some((it) => it >= x);
  }
}

// export class ScoreCard {
//   onesScore
//   twosScore
// }
