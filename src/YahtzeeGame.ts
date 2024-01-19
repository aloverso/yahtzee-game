export class YahtzeeGame {
  totalScore: number;

  constructor() {
    this.totalScore = 0;
  }

  roll(dice: number[]): void {
    let diceValueCounts = [-1, 0, 0, 0, 0, 0, 0]
    for(let die of dice){
      if (die === 1) {
        diceValueCounts[1] = diceValueCounts[1] + 1
      }
      if (die === 2) {
        diceValueCounts[2] = diceValueCounts[2] + 1
      }
      if (die === 3) {
        diceValueCounts[3] = diceValueCounts[3] + 1
      }
      if (die === 4) {
        diceValueCounts[4] = diceValueCounts[4] + 1
      }
      if (die === 5) {
        diceValueCounts[5] = diceValueCounts[5] + 1
      }
      if (die === 6) {
        diceValueCounts[6] = diceValueCounts[6] + 1
      }
    }
    // [-, 1, 2, 0, 1, 1 ]
    let maxCount = 0
    let maxCountIndex = -1
    for (let i = 0; i < diceValueCounts.length; i++) {
      if(diceValueCounts[i] > maxCount){
        maxCount = diceValueCounts[i]
        maxCountIndex = i
      }
    }
    this.totalScore = maxCountIndex * maxCount
  }

  score(): number {
    return this.totalScore;
  }
}
