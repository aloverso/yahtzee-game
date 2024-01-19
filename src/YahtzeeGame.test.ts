import { YahtzeeGame } from './YahtzeeGame'

describe('Yahtzee Game', () => {

  it('starts with score 0', () => {
    expect(new YahtzeeGame().score()).toEqual(0)
  })

  it('scores a roll as Chance and increments the score by the sum of 5 dice rolled', () => {
    const game = new YahtzeeGame()
    game.roll([1,2,3,4,5])
    expect(game.score()).toEqual(15)
  })

  it('scores a roll as 4 of a kind and increments the score by 40', () => {
    
  })

})