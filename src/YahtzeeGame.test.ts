import { YahtzeeGame } from "./YahtzeeGame";

describe("Yahtzee Game", () => {
  it("starts with score 0", () => {
    expect(new YahtzeeGame().score()).toEqual(0);
  });

  it("roll ones and score adds the sum of 1s", () => {
    const game = new YahtzeeGame();
    game.roll([1, 1, 1, 4, 5]);
    expect(game.score()).toEqual(3);
  });

  it("scores yahtzee on round 1", () => {
    const game = new YahtzeeGame();
    game.roll([1, 1, 1, 1, 1]);
    expect(game.score()).toEqual(50);
  });

  // testing
});
