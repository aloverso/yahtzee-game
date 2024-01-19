
/*

What to do:
 * data structure of a roll
 * data structure of running score entries
 * what scores are possible with the current roll
 * how to determine what categories can be picked for a certain roll
 * figure out how we want to choose which category to go with
 */

interface Roll {
  ones: number;
  twos: number;
  threes: number;
  fours: number;
  fives: number;
  sixes: number;
}

export class YahtzeeGame {
  constructor() {
  }

  roll (roll: Roll): void {

  }

  score (): number {
    return 0
  }
}