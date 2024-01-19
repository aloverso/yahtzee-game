import { YahtzeeGame } from './YahtzeeGame'

describe('Yahtzee Game', () => {
  it('starts with score 0', () => {
    expect(new YahtzeeGame().score()).toEqual(0)
  })

  it('adds the sum of dice rolled to score each round', () => {
    const game = new YahtzeeGame();
    game.roll([1,1,1,1,1])
    expect(game.score()).toEqual(5)
    game.roll([1,1,1,1,2])
    expect(game.score()).toEqual(11)
  })

  it('ends the game after thirteen rounds', () => {
    const game = new YahtzeeGame();
    for (let i = 0; i < 13; i++) {
      game.roll([1,1,1,1,1])
    }
    expect(game.score()).toEqual(5*13)
    game.roll([1,1,1,1,1])
    expect(game.score()).toEqual(5*13)
  })
})