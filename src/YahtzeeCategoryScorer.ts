import {CategoryScorer, CategoryScores} from "./domain";

export class YahtzeeCategoryScorer implements CategoryScorer {

  currentRoll: number[]

  score(roll): CategoryScores {
    this.currentRoll = roll
    return {
      ones: this.sumOfOnes(),
      twos: this.sumOfTwos(),
      threes: this.sumOfThrees(),
      fours: this.sumOfFours(),
      fives: this.sumOfFives(),
      sixes: this.sumOfSixes()
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

  private sumOfNumber(num: number): number {
    return this.currentRoll
      .filter((val) => val === num)
      .reduce((partial, acc) => partial + acc, 0);
  }
}