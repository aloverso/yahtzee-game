export class YahtzeeGame {
  ScoreCard: {
    ones: number;
    twos: number;
    threes: number;
    fours: number;
    fives: number;
    sixes: number;
    threeOfAKind: number;
    fourOfAKind: number;
    fullHouse: number;
    smallStraight: number;
    largeStraight: number;
    yahtzee: number;
    chance: number;
  };

  constructor() {
    this.ScoreCard = {
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
  }

  roll(round: number[]): void {
    this.ScoreCard.ones = 3;

    const isYahtzee = this.isYahtzee(round);
  }

  private isYahtzee(round: number[]): boolean {
    return round.every((num) => {
      num === round[0];
    });
  }

  score(): number {
    let totalScore = 0;
    Object.keys(this.ScoreCard).forEach(
      (key) => (totalScore += this.ScoreCard[key])
    );
    return totalScore;
  }
}
