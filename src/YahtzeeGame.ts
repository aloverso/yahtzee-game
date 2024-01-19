export class YahtzeeGame {

  runningScore: number;
  round: number;

  constructor() {
    this.round = 1;
    this.runningScore = 0;
  }

  roll (roll: number[]): void {
    if (this.round > 13) {
      return;
    }

    this.runningScore += sum(roll)
    this.round += 1
  }

  score (): number {
    return this.runningScore
  }
}

const sum = (roll: number[]): number => {
  return roll.reduce((acc, cur) => acc+cur, 0)
}
