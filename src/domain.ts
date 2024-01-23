
export interface Chooser {
  choose: (categories: CategoryScores) => number
}

export interface CategoryScorer {
  score: (roll: number[]) => CategoryScores
}

export type CategoryScores = {
  ones: number;
  twos: number;
  threes: number;
  fours: number;
  fives: number;
  sixes: number;
  threeOfAKind: number;
  fourOfAKind: number;
}
