import {CategoryScores} from "./domain";

const ONES_THROUGH_SIXES_BONUS_SCORE = 63;

export class Scorecard {
  private chosenCategories: string[]
  private scores: CategoryScores;
  private yahtzeeBonus: boolean;

  constructor() {
    this.yahtzeeBonus = false;
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

  markYahtzeeBonus(): void {
    this.yahtzeeBonus = true;
  }

  hasYahtzeeBonus(): boolean {
    return this.yahtzeeBonus
  }

  hasOnesThroughSixesBonus(): boolean {
    return (
      this.scores.ones +
      this.scores.twos +
      this.scores.threes +
      this.scores.fours +
      this.scores.fives +
      this.scores.sixes) >= ONES_THROUGH_SIXES_BONUS_SCORE
  }

  isAlreadyChosen(category: string): boolean {
    return this.chosenCategories.includes(category)
  }

  scoreCategory(category: string, score: number): void {
    this.chosenCategories.push(category)
    this.scores[category] = score
  }
}