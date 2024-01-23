import {CategoryScores, Chooser} from "./domain";

export class YahtzeeChooser implements Chooser {

  scorecard: Scorecard

  constructor() {
    this.scorecard = new Scorecard()
  }

  choose(categoryScores: CategoryScores): number {
    const remainingCategories: Partial<CategoryScores> = {}
    for (const key of Object.keys(categoryScores)) {
      if (!this.scorecard.isAlreadyChosen(key)) {
        remainingCategories[key] = categoryScores[key]
      }
    }
    let max = -1;
    let maxCategory = ''
    for (const category of Object.keys(remainingCategories)) {
      if (remainingCategories[category] > max) {
        max = remainingCategories[category]
        maxCategory = category
      }
    }

    this.scorecard.scoreCategory(maxCategory, max)
    return max
  }
}

class Scorecard {
  chosenCategories: string[]
  scores: CategoryScores;

  constructor() {
    this.chosenCategories = []
    this.scores = {
      ones: 0,
      twos: 0,
      threes: 0,
      fours: 0,
      fives: 0,
      sixes: 0,
      threeOfAKind: 0,
      fourOfAKind: 0,
      fullHouse: 0,
      smallStraight: 0,
      largeStraight: 0,
      yahtzee: 0,
      chance: 0,
    }
  }

  isAlreadyChosen(category: string): boolean {
    return this.chosenCategories.includes(category)
  }

  scoreCategory(category: string, score: number): void {
    this.chosenCategories.push(category)
    this.scores[category] = score
  }
}