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

class YahtzeeChooser implements Chooser {
  choose(categories): number {
    return 0
  }
}

class YahtzeeCategoryScorer implements CategoryScorer {
  score(roll): CategoryScores {
    return {
      ones: 0,
      twos: 0
    }
  }
}