import {CategoryScorer, Chooser} from "./domain";

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