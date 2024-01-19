type ScoreCard = {
  ones: number | undefined;
  twos: number | undefined;
  threes: number | undefined;
  fours: number | undefined;
  fives: number | undefined;
  sixes: number | undefined;
  threeOfAKind: number | undefined;
  fourOfAKind: number | undefined;
  fullHouse: number | undefined;
  smallStraight: number | undefined;
  largeStraight: number | undefined;
  yahtzee: number | undefined;
  chance: number | undefined;
};

export class YahtzeeGame {
  private runningScore: number;
  private scoreCard: ScoreCard;

  constructor() {
    this.runningScore = 0;
  }

  roll(round: number[]): void {
    if (this.scoreCard.yahtzee === undefined && this.isYahtzee(round)) {
      this.scoreCard.yahtzee = 50;
    } else if (this.isLargeStraight(round)) {
      this.runningScore += 40;
    } else if (this.isShortStraight(round)) {
      this.runningScore += 30;
    } else if (this.isFourOfAKind(round)) {
      this.runningScore += this.getSumOfRound(round);
    } else if (this.isThreeOfAKind(round)) {
      this.runningScore += this.getSumOfRound(round);
    } else {
      this.runningScore += this.getSumOfMostFrequentFace(round);
    }
  }

  private getDieFaceCount(round: number[]): number[] {
    // making index[0] -1, so 1-6 align with die face number
    let dieFaces = [-1, 0, 0, 0, 0, 0, 0];
    // roll: [2, 2, 2, 1, 2]
    // dieFaces: [-1, 1, 4, 0, 0, 0, 0]
    round.forEach((die) => {
      dieFaces[die] += 1;
    });

    return dieFaces;
  }

  private getSumOfRound(round: number[]): number {
    let roundSum = 0;
    round.forEach((die) => {
      roundSum += die;
    });

    return roundSum;
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
    let dieFaceCount = this.getDieFaceCount(round);
    return dieFaceCount.includes(4);
  }

  private isThreeOfAKind(round: number[]): boolean {
    let dieFaceCount = this.getDieFaceCount(round);
    return dieFaceCount.includes(3);
  }

  private getSumOfMostFrequentFace(round: number[]): number {
    const dieFaces = this.getDieFaceCount(round);
    let maxCount = 0;
    let maxCountIndex = -1;

    for (let i = 1; i < dieFaces.length; i++) {
      if (dieFaces[i] >= maxCount) {
        maxCount = dieFaces[i];
        maxCountIndex = i;
      }
    }

    return maxCount * maxCountIndex;
  }

  score(): number {
    return this.runningScore;
  }
}
