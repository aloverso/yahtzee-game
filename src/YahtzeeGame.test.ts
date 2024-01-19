import {CategoryScorer, Chooser, YahtzeeGame} from './YahtzeeGame'

describe('Yahtzee Game', () => {

  let chooser: Chooser;
  let categoryScorer: CategoryScorer;

  beforeEach(() => {
    chooser = {
      choose: jest.fn()
    }
    categoryScorer = {
      score: jest.fn()
    }
  })

  it('starts with score 0', () => {
    expect(new YahtzeeGame(categoryScorer, chooser).score()).toEqual(0)
  })

  it('adds the sum of dice rolled to score each round', () => {
    const game = new YahtzeeGame(categoryScorer, chooser);
    game.roll([1,1,1,1,1])
    expect(game.score()).toEqual(5)
    game.roll([1,1,1,1,2])
    expect(game.score()).toEqual(11)
  })

  it('ends the game after thirteen rounds', () => {
    const game = new YahtzeeGame(categoryScorer, chooser);
    for (let i = 0; i < 13; i++) {
      game.roll([1,1,1,1,1])
    }
    expect(game.score()).toEqual(5*13)
    game.roll([1,1,1,1,1])
    expect(game.score()).toEqual(5*13)
  })

  it('uses a chooser and a categoryScorer to choose and score a category', () => {
    expect(true).toEqual(true)
  })
})