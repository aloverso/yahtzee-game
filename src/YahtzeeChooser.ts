import {CategoryScores, Chooser} from "./domain";

export class YahtzeeChooser implements Chooser {

  chosenCategories: string[]

  constructor() {
    this.chosenCategories = []
  }

  choose(categoryScores: CategoryScores): number {
    const remainingCategories: Partial<CategoryScores> = {}
    for (const key of Object.keys(categoryScores)) {
      if (!this.chosenCategories.includes(key)) {
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

    this.chosenCategories.push(maxCategory)
    return max
  }
}
