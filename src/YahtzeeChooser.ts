import {CategoryScores, Chooser} from "./domain";
import {Scorecard} from "./Scorecard";

export class YahtzeeChooser implements Chooser {

  scorecard: Scorecard

  constructor(scorecard: Scorecard) {
    this.scorecard = scorecard
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
