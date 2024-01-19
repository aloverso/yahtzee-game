export class YahtzeeGame {

  runningScore: number;
  round: number;
  categoryScorer: CategoryScorer;
  chooser: Chooser;

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

    this.runningScore += sum(roll)
    this.round += 1
  }

  score (): number {
    return this.runningScore
  }
}

const sum = (roll: number[]): number => {
  return roll.reduce((acc, cur) => acc+cur, 0)
}

type CategoryScores = {
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