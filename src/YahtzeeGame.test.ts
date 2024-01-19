import { YahtzeeGame } from "./YahtzeeGame";

describe("Yahtzee Game", () => {
  it("starts with score 0", () => {
    expect(new YahtzeeGame().score()).toEqual(0);
  });

  it("correctly calculates the score for a yahtzee", () => {
    const game = new YahtzeeGame();

    game.roll([6, 6, 6, 6, 6]);
    expect(game.score()).toEqual(50);
  });
});
