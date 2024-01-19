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

type ScoreCategory =
  | "ones"
  | "twos"
  | "threes"
  | "fours"
  | "fives"
  | "sixes"
  | "threeOfAKind"
  | "fourOfAKind"
  | "fullHouse"
  | "smallStraight"
  | "largeStraight"
  | "yahtzee"
  | "chance";

interface ScoreSheet {
  [key: string]: number | null;
}

export class YahtzeeGame {
  runningScore: number;

  constructor() {
    this.runningScore = 0;
  }

  roll(roll: Roll): void {
    this.runningScore = 50;
  }

  score(): number {
    return this.runningScore;
  }
}

/* takes a roll, determines all possible categories */
export const possibleCategories = (roll: Roll): PossibleCategories => {
  const hasXOfAKind = (x: number, rolls: Roll): boolean =>
    Object.values(rolls).some((value) => value >= x);

  const hasFullHouse = () => {
    const threeOfAKindDice = Object.keys(roll).find((key) => roll[key] >= 3);
    if (!threeOfAKindDice) return false;
    const rollWithoutThreeOfAKindDice = { ...roll, [threeOfAKindDice]: 0 };
    return hasXOfAKind(2, rollWithoutThreeOfAKindDice);
  };

  const hasSmallStraight = () => {
    if (roll.ones > 0) {
      return roll.twos > 0 && roll.threes > 0 && roll.fours > 0;
    } else if (roll.twos > 0) {
      return roll.threes > 0 && roll.fours > 0 && roll.fives > 0;
    }
    return (
      roll.threes > 0 && roll.fours > 0 && roll.fives > 0 && roll.sixes > 0
    );
  };

  const hasLargeStraight = () => {
    if (roll.ones > 0) {
      return (
        roll.twos > 0 && roll.threes > 0 && roll.fours > 0 && roll.fives > 0
      );
    }
    return (
      roll.twos > 0 &&
      roll.threes > 0 &&
      roll.fours > 0 &&
      roll.fives > 0 &&
      roll.sixes > 0
    );
  };

  return {
    ones: roll.ones > 0,
    twos: roll.twos > 0,
    threes: roll.threes > 0,
    fours: roll.fours > 0,
    fives: roll.fives > 0,
    sixes: roll.sixes > 0,
    threeOfAKind: hasXOfAKind(3, roll),
    fourOfAKind: hasXOfAKind(4, roll),
    fullHouse: hasFullHouse(),
    smallStraight: hasSmallStraight(),
    largeStraight: hasLargeStraight(),
    yahtzee: hasXOfAKind(5, roll),
    chance: true,
  };
};
