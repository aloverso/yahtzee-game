
export interface Chooser {
  choose: (categories: CategoryScores) => number
}

export interface CategoryScorer {
  score: (roll: number[]) => CategoryScores
}

export type CategoryScores = {
  ones: number;
  twos: number;
}
