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

  private onesTest(dice: number[]): boolean {
    return false;
  }

  private twosTest(dice: number[]): boolean {
    return false;
  }

  private threesTest(dice: number[]): boolean {
    return false;
  }

  private foursTest(dice: number[]): boolean {
    return false;
  }

  private fivesTest(dice: number[]): boolean {
    return true;
  }

  private sixesTest(dice: number[]): boolean {
    return false;
  }

  private threeOfAKindTest(dice: number[]): boolean {
    return false;
  }

  private fourOfAKindTest(dice: number[]): boolean {
    return true;
  }

  private fullHouseTest(dice: number[]): boolean {
    return false;
  }

  private smallStraightTest(dice: number[]): boolean {
    return false;
  }

  private largeStraightTest(dice: number[]): boolean {
    return false;
  }

  private yahtzeeTest(dice: number[]): boolean {
    return false;
  }

  roll(dice: number[]): void {
    switch (true) {
      case this.onesTest(dice):
        break;
      case this.twosTest(dice):
        break;
      case this.threesTest(dice):
        break;
      case this.foursTest(dice):
        break;
      case this.fivesTest(dice):
        this.scoreSheet.fives = 10;
        break;
      case this.sixesTest(dice):
        break;
      case this.threeOfAKindTest(dice):
        break;
      case this.fourOfAKindTest(dice):
        this.scoreSheet.fourOfAKind = this.sum(dice);
        break;
      case this.fullHouseTest(dice):
        break;
      case this.smallStraightTest(dice):
        break;
      case this.largeStraightTest(dice):
        break;
      case this.yahtzeeTest(dice):
        break;
      default:
        this.scoreSheet.chance = this.sum(dice);
        break;
    }
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
