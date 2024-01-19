export class YahtzeeGame {

  runningScore = 0;

  constructor() {
  }

  /*
  a Roll is the array of 5 dice in a round
  a Die/Dice is one of the 5 elements of the Roll
  */
  roll (dice: number[]): void {
    this.runningScore += sum(dice);
  }

  score (): number {
    return this.runningScore
  }
}

const sum = (dice: number[]): number => {
 return dice.reduce((acc, curr) => acc + curr, 0)
}