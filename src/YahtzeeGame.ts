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

  roll(diceValues: number[]): void {
    if (this.isYahtzee(diceValues)) {
      this.ScoreCard.yahtzee = 50;
    }

    if (this.isLargeStraight(diceValues)) {
      this.ScoreCard.largeStraight = 40;
    } else if (this.isSmallStraight(diceValues)) {
      this.ScoreCard.smallStraight = 30;
    }

    if (this.isFullHouse(diceValues)) {
      this.ScoreCard.fullHouse = 25;
    }

    if(this.isSumOfDiceValuesCategory(diceValues)) {
      this.ScoreCard.fourOfAKind = this.sumOfDice(diceValues);
    }
  }

  private isYahtzee(diveValues: number[]): boolean {
    return diveValues.every((num) => {
      return num === diveValues[0];
    });
  }

  private isLargeStraight(diceValues: number[]): boolean {
    return (diceValues.includes(2) && diceValues.includes(3) && diceValues.includes(4) && diceValues.includes(5))
        && (diceValues.includes(1) || diceValues.includes(6))
  }

  private isSmallStraight(diceValues: number[]): boolean {
    return (diceValues.includes(3) && diceValues.includes(4))
        &&
        (
                (diceValues.includes(1) && diceValues.includes(2))
            ||  (diceValues.includes(2) && diceValues.includes(5))
            ||  (diceValues.includes(5) && diceValues.includes(6))
        )
  }

  private getDiceFaceCounts(diceValues: number[]): number[]{
    const diceFaceValues = [-1, 0, 0, 0, 0, 0, 0 ]
    diceValues.forEach((dice) => {
      diceFaceValues[dice] += 1
    })
    return diceFaceValues
  }

  private isFullHouse(diceValues: number[]): boolean {
    const faceValues = this.getDiceFaceCounts(diceValues)
    return faceValues.includes(3) && faceValues.includes(2)
  }

  private isSumOfDiceValuesCategory(diceValues: number[]): boolean {
    const faceValues = this.getDiceFaceCounts(diceValues)
    return faceValues.includes(4)
  }

  private sumOfDice(diceValues: number[]): number {
    return diceValues.reduce((val, acc) => val + acc);
  }

  score(): number {
    let totalScore = 0;
    Object.keys(this.ScoreCard).forEach(
      (key) => (totalScore += this.ScoreCard[key])
    );
    return totalScore;
  }
}
