import { YahtzeeGame } from './YahtzeeGame'

describe('Yahtzee Game', () => {
  it('starts with score 0', () => {
    expect(new YahtzeeGame().score()).toEqual(0)
  })
})