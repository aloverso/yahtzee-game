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
  private finalScoreSheet: ScoreSheet;
  private tempScoreSheet: ScoreSheet;

  constructor() {
    this.finalScoreSheet = {
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

  private updateFinalScoreSheet() {
    let max = 0;
    const maxCategory = null;
    for (const [key, value] of Object.entries(this.tempScoreSheet)) {
      if (value !== null) {
        if (value > max) {
          max = value;
        }
      }
    }
  }

  roll(dice: number[]): void {
    this.finalScoreSheet = {
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
    };

    switch (true) {
      case this.yahtzeeTest(dice):
        this.tempScoreSheet.yahtzee = 50;
        break;
      case this.largeStraightTest(dice):
        this.tempScoreSheet.yahtzee = 40;
        break;
      case this.smallStraightTest(dice):
        this.tempScoreSheet.yahtzee = 30;
        break;
    }
    if (this.onesTest(dice)) {
      this.tempScoreSheet.ones = 0;
    }
    if (this.twosTest(dice)) {
      this.tempScoreSheet.twos = 0;
    }
    if (this.threesTest(dice)) {
      this.tempScoreSheet.threes = 0;
    }
    if (this.foursTest(dice)) {
      this.tempScoreSheet.fours = 0;
    }
    if (this.fivesTest(dice)) {
      this.tempScoreSheet.fives = 10;
    }
    if (this.sixesTest(dice)) {
      this.tempScoreSheet.sixes = 0;
    }
    if (this.threeOfAKindTest(dice)) {
      this.tempScoreSheet.threeOfAKind = 0;
    }
    if (this.fourOfAKindTest(dice)) {
      this.tempScoreSheet.fourOfAKind = this.sum(dice);
    }
    if (this.fullHouseTest(dice)) {
      this.tempScoreSheet.fullHouse = 0;
    }

    this.tempScoreSheet.chance = this.sum(dice);

    console.log(this.tempScoreSheet);
    console.log(this.finalScoreSheet);
  }

  score(): number {
    let score = 0;

    for (const [key, value] of Object.entries(this.finalScoreSheet)) {
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
