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
    if (this.isYahtzee(round)) {
      this.ScoreCard.yahtzee = 50;
    }

    if (this.isLargeStraight(round)) {
      this.ScoreCard.largeStraight = 40;
    }

    if (this.isSmallStraight(round)) {
      this.ScoreCard.smallStraight = 30;
    }
  }

  private isYahtzee(round: number[]): boolean {
    return round.every((num) => {
      return num === round[0];
    });
  }

  private isLargeStraight(round: number[]): boolean {
    return (round.includes(2) && round.includes(3) && round.includes(4) && round.includes(5))
        && (round.includes(1) || round.includes(6))
  }

  private isSmallStraight(round: number[]): boolean {
    return (round.includes(3) && round.includes(4))
        &&
        (
                (round.includes(1) && round.includes(2))
            ||  (round.includes(2) && round.includes(5))
            ||  (round.includes(5) && round.includes(6))
        )
  }

  private isFullHouse(round: number[]): boolean {
    return false
  }

  score(): number {
    let totalScore = 0;
    Object.keys(this.ScoreCard).forEach(
      (key) => (totalScore += this.ScoreCard[key])
    );
    return totalScore;
  }
}
