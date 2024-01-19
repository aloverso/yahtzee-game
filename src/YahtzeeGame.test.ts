import { YahtzeeGame } from './YahtzeeGame'

describe('Yahtzee Game', () => {
  it('starts with score 0', () => {
    expect(new YahtzeeGame().score()).toEqual(0)
  })
})

describe("Roll", () => {
  it("increases the score always on the first roll", () => {
    const yahtzee = new YahtzeeGame();
    yahtzee.roll({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 5 });
    expect(yahtzee.score() > 0);
  })
})