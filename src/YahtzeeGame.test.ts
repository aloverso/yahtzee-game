import { YahtzeeGame } from "./YahtzeeGame";

describe("Yahtzee Game", () => {
  let game: YahtzeeGame;

  beforeEach(() => {
    game = new YahtzeeGame();
  });

  it("starts with score 0", () => {
    expect(game.score()).toEqual(0);
  });

  it("scores a roll as Chance and increments the score by the sum of 5 dice rolled", () => {
    game.roll([1, 2, 3, 4, 5]);
    expect(game.score()).toEqual(15);
  });

  it("scores a roll as two fives and increments the score by 10", () => {
    game.roll([5, 5, 4, 2, 2]);
    expect(game.score()).toEqual(10);
  });

  it("scores a roll as 4 of a kind and increments the score by 22", () => {
    game.roll([5, 5, 5, 5, 2]);
    expect(game.score()).toEqual(22);
  });
});
