type Round = {};

export class YahtzeeGame {
  private runningScore: number;
  constructor() {
    this.runningScore = 0;
  }

  roll(round: number[]): void {
    if (this.isYahtzee(round)) {
      this.runningScore += 50;
    } else if (this.isLargeStraight(round)) {
      this.runningScore += 40;
    } else if (this.isShortStraight(round)) {
      this.runningScore += 30;
    } else if (this.isFourOfAKind(round)) {
      this.runningScore += this.getSumOfRound(round);
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

  private getDieFaceCount(round: number[]): number[] {
    // making index[0] -1, so 1-6 align with die face number
    let dieFaces = [-1, 0, 0, 0, 0, 0, 0];
    round.every((die) => {
      console.log(die);
      dieFaces[die] += 1;
    });

    return dieFaces;
  }

  private getSumOfRound(round: number[]): number {
    let roundSum = 0;
    round.every((die) => {
      roundSum += die;
    });

    return roundSum;
  }

  private isFourOfAKind(round: number[]): boolean {
    let dieFaceCount = this.getDieFaceCount(round);
    console.log(dieFaceCount);
    return dieFaceCount.includes(4);
  }

  score(): number {
    return this.runningScore;
  }
}
