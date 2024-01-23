import {CategoryScorer, CategoryScores} from "./domain";

export class YahtzeeCategoryScorer implements CategoryScorer {

  currentRoll: number[]
  histogram: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
  };

  score(roll): CategoryScores {
    this.currentRoll = roll

    this.histogram = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
    };

    for (const dice of this.currentRoll) {
      this.histogram[dice] += 1;
    }

    return {
      ones: this.sumOfOnes(),
      twos: this.sumOfTwos(),
      threes: this.sumOfThrees(),
      fours: this.sumOfFours(),
      fives: this.sumOfFives(),
      sixes: this.sumOfSixes(),
      threeOfAKind: this.scoreOfThreeOfAKind(),
      fourOfAKind: this.scoreOfFourOfAKind()
    }
  }

  sumOfOnes() {
    return this.sumOfNumber(1)
  }

  sumOfTwos() {
    return this.sumOfNumber(2)
  }

  sumOfThrees() {
    return this.sumOfNumber(3)
  }

  sumOfFours() {
    return this.sumOfNumber(4)
  }

  sumOfFives() {
    return this.sumOfNumber(5)
  }

  sumOfSixes() {
    return this.sumOfNumber(6)
  }

  scoreOfThreeOfAKind(): number {
    const hasThreeOfAKind = this.hasXOfAKind(3);
    return hasThreeOfAKind ? this.sumAll() : 0;
  }

  scoreOfFourOfAKind(): number {
    const hasFourOfAKind = this.hasXOfAKind(4);
    return hasFourOfAKind ? this.sumAll() : 0;
  }


  private hasXOfAKind(x: number): boolean {
    return Object.values(this.histogram).some((it) => it >= x);
  }

  private sumOfNumber(num: number): number {
    return this.currentRoll
      .filter((val) => val === num)
      .reduce((partial, acc) => partial + acc, 0);
  }

  private sumAll(): number {
    return this.currentRoll.reduce((partial, acc) => partial + acc, 0);
  }
}