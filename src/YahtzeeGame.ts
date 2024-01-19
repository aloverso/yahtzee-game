type Round = {};

export class YahtzeeGame {
  private runningScore: number;
  constructor() {
    this.runningScore = 0;
  }

  roll(round: number[]): void {
    if (this.isYahtzee(round)) {
      this.runningScore += 50;
    }

    if (this.isLargeStraight(round)) {
      this.runningScore += 40;
    }

    if (this.isShortStraight(round)) {
      this.runningScore += 30;
    }
  }

  private isYahtzee(round: number[]): boolean {
    return round.every((num) => {
      return num === round[0];
    });
  }

  private isLargeStraight(round: number[]): boolean {
    return (
      round.includes(1) &&
      round.includes(2) &&
      round.includes(3) &&
      round.includes(4) &&
      round.includes(5)
    );
  }

  private isShortStraight(round: number[]): boolean {
    return (
      (round.includes(1) &&
        round.includes(2) &&
        round.includes(3) &&
        round.includes(4)) ||
      (round.includes(2) &&
        round.includes(3) &&
        round.includes(4) &&
        round.includes(5))
    );
  }

  private isFourOfAKind(round: number[]): boolean {
    return false;
  }

  score(): number {
    return this.runningScore;
  }
}
