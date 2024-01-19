export class YahtzeeGame {

  private runningScore: number;
  private round: number;
  private categoryScorer: CategoryScorer;
  private chooser: Chooser;

  constructor(categoryScorer: CategoryScorer, chooser: Chooser) {
    this.round = 1;
    this.chooser = chooser
    this.categoryScorer = categoryScorer
    this.runningScore = 0;
  }

  roll (roll: number[]): void {
    if (this.round > 13) {
      return;
    }

    const scores = this.categoryScorer.score(roll)
    const chosenScore = this.chooser.choose(scores)

    this.runningScore += chosenScore
    this.round += 1
  }

  score (): number {
    return this.runningScore
  }
}

export type CategoryScores = {
  ones: number;
  twos: number;
}

export interface Chooser {
  choose: (categories: CategoryScores) => number
}

export interface CategoryScorer {
  score: (roll: number[]) => CategoryScores
}

export class YahtzeeChooser implements Chooser {
  choose(categories): number {
    return 0
  }
}

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