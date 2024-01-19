import {CategoryScorer, CategoryScores, Chooser, YahtzeeGame} from './YahtzeeGame'

describe('Yahtzee Game', () => {

  let chooser: StubChooser;
  let categoryScorer: StubCategoryScorer;

  beforeEach(() => {
    chooser = new StubChooser()
    categoryScorer = new StubCategoryScorer()
  })

  it('starts with score 0', () => {
    expect(new YahtzeeGame(categoryScorer, chooser).score()).toEqual(0)
  })

  it('ends the game after thirteen rounds', () => {
    const game = new YahtzeeGame(categoryScorer, chooser);
    chooser.setChooseReturn(1)
    for (let i = 0; i < 13; i++) {
      game.roll([1,1,1,1,1])
    }
    expect(game.score()).toEqual(13)
    game.roll([1,1,1,1,1])
    expect(game.score()).toEqual(13)
  })

  it('uses a chooser and a categoryScorer to choose and score a category', () => {
    const game = new YahtzeeGame(categoryScorer, chooser);
    categoryScorer.setScoreReturn({ ones: 1, twos: 2})
    chooser.setChooseReturn(2)
    game.roll([1,2,3,4,5])
    expect(game.score()).toEqual(2)
    expect(categoryScorer.scoreCalledWith).toEqual([1,2,3,4,5])
    expect(chooser.chooseCalledWith).toEqual({ ones: 1, twos: 2})
  })
})

class StubChooser implements Chooser {
  stubbedValue: number;
  chooseCalledWith: CategoryScores;

  choose(categoryScores: CategoryScores): number {
    this.chooseCalledWith = categoryScores
    return this.stubbedValue
  }

  setChooseReturn(stub: number): void {
    this.stubbedValue = stub
  }
}

class StubCategoryScorer implements CategoryScorer {

  stubbedValue: CategoryScores;
  scoreCalledWith: number[];

  score(roll: number[]): CategoryScores {
    this.scoreCalledWith = roll
    return this.stubbedValue
  }

  setScoreReturn(stub: CategoryScores): void {
    this.stubbedValue = stub
  }
}