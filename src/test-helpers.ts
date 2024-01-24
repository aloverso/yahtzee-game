import {CategoryScorer, CategoryScores, Chooser} from "./domain";

export class StubChooser implements Chooser {
  stubbedValue: number;
  chooseCalledWith: CategoryScores;

  choose(categoryScores: CategoryScores): number {
    this.chooseCalledWith = categoryScores
    return this.stubbedValue
  }

  setChooseReturn(stub: number): void {
    this.stubbedValue = stub
  }
}

export class StubCategoryScorer implements CategoryScorer {

  stubbedValue: CategoryScores;
  scoreCalledWith: number[];

  score(roll: number[]): CategoryScores {
    this.scoreCalledWith = roll
    return this.stubbedValue
  }

  setScoreReturn(stub: CategoryScores): void {
    this.stubbedValue = stub
  }
}

export const generateCategoryScores = (overrides: Partial<CategoryScores>): CategoryScores => {
  return {
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
    ...overrides
  }
}