import {CategoryScores} from "./domain";

export class Scorecard {
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