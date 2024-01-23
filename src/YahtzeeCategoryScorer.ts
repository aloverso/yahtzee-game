import {CategoryScorer, CategoryScores} from "./domain";

export class YahtzeeCategoryScorer implements CategoryScorer {

  currentRoll: number[]

  score(roll): CategoryScores {
    this.currentRoll = roll
    return {
      ones: this.sumOfOnes(),
      twos: this.sumOfTwos()
    }
  }

  sumOfOnes() {
    return this.sumOfNumber(1)
  }

  sumOfTwos() {
    return this.sumOfNumber(2)
  }

  private sumOfNumber(num: number): number {
    return this.currentRoll
      .filter((val) => val === num)
      .reduce((partial, acc) => partial + acc, 0);
  }
}