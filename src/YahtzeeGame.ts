export class YahtzeeGame {
  ScoreCard: {
    1: number;
    2 : number;
    3: number;
    4: number;
    5: number;
    6: number;
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
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
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

    else if (this.isLargeStraight(diceValues)) {
      this.ScoreCard.largeStraight = 40;
    } else if (this.isSmallStraight(diceValues)) {
      this.ScoreCard.smallStraight = 30;
    }

    else if (this.isFullHouse(diceValues)) {
      this.ScoreCard.fullHouse = 25;
    }

    else if(this.isFourOfAKind(diceValues)) {
      this.ScoreCard.fourOfAKind = this.sumOfDice(diceValues);
    }

    else if(this.isThreeOfAKind(diceValues)) {
      this.ScoreCard.threeOfAKind = this.sumOfDice(diceValues);
    }

    else {
      const highestIndex = this.highestScoringFace(diceValues)
      this.ScoreCard[highestIndex] = this.getDiceFaceCounts(diceValues)[highestIndex] * highestIndex
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

  private isFourOfAKind(diceValues: number[]): boolean {
    const faceValues = this.getDiceFaceCounts(diceValues)
    return faceValues.includes(4)
  }

  private isThreeOfAKind(diceValues: number[]): boolean {
    const faceValues = this.getDiceFaceCounts(diceValues)
    return faceValues.includes(3)
  }

  private highestScoringFace(diceValues: number[]): number {
    const faceValues = this.getDiceFaceCounts(diceValues)
    let highestScore= 0
    let highestScoreIndex = -1
    for(let i = 1; i < faceValues.length; i++){
      if(faceValues[i] * i > highestScore){
        highestScore = faceValues[i] * i
        highestScoreIndex = i
      }
    }
    return highestScoreIndex
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
