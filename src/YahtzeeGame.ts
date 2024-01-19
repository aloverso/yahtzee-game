export class YahtzeeGame {
  totalScore: number;

  constructor() {
    this.totalScore = 0;
  }

  roll(dice: number[]): void {
    const diceValueCounts = [-1, 0, 0, 0, 0, 0, 0];
    for (const die of dice) {
      if (die === 1) {
        diceValueCounts[1] = diceValueCounts[1] + 1;
      }
      if (die === 2) {
        diceValueCounts[2] = diceValueCounts[2] + 1;
      }
      if (die === 3) {
        diceValueCounts[3] = diceValueCounts[3] + 1;
      }
      if (die === 4) {
        diceValueCounts[4] = diceValueCounts[4] + 1;
      }
      if (die === 5) {
        diceValueCounts[5] = diceValueCounts[5] + 1;
      }
      if (die === 6) {
        diceValueCounts[6] = diceValueCounts[6] + 1;
      }
    }

    console.log(diceValueCounts);

    // checking for Yahtzee
    if (diceValueCounts.includes(5)) {
      this.totalScore += 50;
    }
    // checking for large straight
    else if (this.isLargeStraight(dice)) {
      this.totalScore += 40;
    }
    // checking for small straight
    else if (this.isShortStright(dice)) {
      this.totalScore += 30;
    }
    // checking for full house
    else if (diceValueCounts.includes(3) && diceValueCounts.includes(2)) {
      this.totalScore += 25;
    }
    //checking for 4 of a kind
    else if (diceValueCounts.includes(4)) {
      this.totalScore += this.sumOfRolledDie(dice);
    }
    // checking for 3 of a kind
    else if (diceValueCounts.includes(3)) {
      this.totalScore += this.sumOfRolledDie(dice);
    }
    // checking for maximum of base cases (ones, twos, threes, etc.)
    else {
      let maxCount = 0;
      let maxCountIndex = -1;
      for (let i = 0; i < diceValueCounts.length; i++) {
        if (diceValueCounts[i] > maxCount) {
          maxCount = diceValueCounts[i];
          maxCountIndex = i;
        }
      }
      this.totalScore = maxCountIndex * maxCount;
    }
  }

  private isShortStright(dice: number[]): boolean {
    return (
      (dice.includes(1) &&
        dice.includes(2) &&
        dice.includes(3) &&
        dice.includes(4)) ||
      (dice.includes(2) &&
        dice.includes(3) &&
        dice.includes(4) &&
        dice.includes(5)) ||
      (dice.includes(3) &&
        dice.includes(4) &&
        dice.includes(5) &&
        dice.includes(6))
    );
  }

  private isLargeStraight(dice: number[]): boolean {
    return (
      (dice.includes(1) &&
        dice.includes(2) &&
        dice.includes(3) &&
        dice.includes(4) &&
        dice.includes(5)) ||
      (dice.includes(2) &&
        dice.includes(3) &&
        dice.includes(4) &&
        dice.includes(5) &&
        dice.includes(6))
    );
  }

  score(): number {
    return this.totalScore;
  }

  private sumOfRolledDie(dice: number[]): number {
    let sum = 0;
    for (const die of dice) {
      sum += die;
    }
    return sum;
  }
}
