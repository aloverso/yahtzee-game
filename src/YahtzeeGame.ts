/*

What to do:
 * data structure of a roll
 * data structure of running score entries
 * what scores are possible with the current roll
 * how to determine what categories can be picked for a certain roll
 * figure out how we want to choose which category to go with
 */

interface Roll {
  ones: number;
  twos: number;
  threes: number;
  fours: number;
  fives: number;
  sixes: number;
}

interface PossibleCategories {
  ones: boolean;
  twos: boolean;
  threes: boolean;
  fours: boolean;
  fives: boolean;
  sixes: boolean;
  threeOfAKind: boolean;
  fourOfAKind: boolean;
  fullHouse: boolean;
  smallStraight: boolean;
  largeStraight: boolean;
  yahtzee: boolean;
  chance: boolean;
}

export class YahtzeeGame {
  runningScore: number;

  constructor() {
    this.runningScore = 0;
  }

  roll(roll: Roll): void {
    this.runningScore = 1;
  }

  score(): number {
    return this.runningScore;
  }
}

/* takes a roll, determines all possible categories */
export const possibleCategories = (roll: Roll): PossibleCategories => {
  return {
    ones: false,
    twos: false,
    threes: false,
    fours: false,
    fives: false,
    sixes: false,
    threeOfAKind: false,
    fourOfAKind: false,
    fullHouse: false,
    smallStraight: false,
    largeStraight: false,
    yahtzee: false,
    chance: false,
  };
};
