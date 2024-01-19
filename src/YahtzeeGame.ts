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
  private scoreSheet: ScoreSheet;

  constructor() {
    this.scoreSheet = {
      ones: null,
      twos: null,
      threes: null,
      fours: null,
      fives: null,
      sixes: null,
      threeOfAKind: null,
      fourOfAKind: null,
      fullHouse: null,
      smallStraight: null,
      largeStraight: null,
      yahtzee: null,
      chance: null,
    };
  }

  /*
  a Roll is the array of 5 dice in a round
  a Die/Dice is one of the 5 elements of the Roll
  */
  roll(dice: number[]): void {
    switch (true) {
    }
    // this.runningScore += sum(dice);
  }

  score(): number {
    let score = 0;

    for (const [key, value] of Object.entries(this.scoreSheet)) {
      if (value !== null) {
        score += value;
      }
    }

    return score;
  }

  private sum = (dice: number[]): number => {
    return dice.reduce((acc, curr) => acc + curr, 0);
  };
}
