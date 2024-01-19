import { YahtzeeGame } from "./YahtzeeGame";

describe("Yahtzee Game", () => {
  it("starts with score 0", () => {
    expect(new YahtzeeGame().score()).toEqual(0);
  });

  it("correctly calculates the score for a yahtzee of 6s on first round", () => {
    const game = new YahtzeeGame();

    game.roll([6, 6, 6, 6, 6]);
    expect(game.score()).toEqual(50);
  });

  it("correctly calculates the score for a yahtzee of 1s on first round", () => {
    const game = new YahtzeeGame();

    game.roll([1, 1, 1, 1, 1]);
    expect(game.score()).toEqual(50);
  });

  it("correctly calculates the score for a large straight on first round", () => {
    const game = new YahtzeeGame();

    game.roll([1, 4, 3, 2, 5]);
    expect(game.score()).toEqual(40);
  });

  it("correctly calculates the score for a short straight on first round", () => {
    const game1 = new YahtzeeGame();

    game1.roll([1, 4, 3, 2, 2]);
    expect(game1.score()).toEqual(30);

    const game2 = new YahtzeeGame();
    game2.roll([2, 5, 4, 3, 5]);
    expect(game2.score()).toEqual(30);
  });

  it("correctly calculates the score for a 4 of a kind on first round", () => {
    const game = new YahtzeeGame();

    game.roll([4, 4, 4, 4, 1]);
    expect(game.score()).toEqual(17);
  });
});
