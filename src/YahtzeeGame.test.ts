import { YahtzeeGame } from "./YahtzeeGame";

describe("Yahtzee Game", () => {
  let game: YahtzeeGame;

  beforeEach(() => {
    game = new YahtzeeGame();
  });

  it("starts with score 0", () => {
    expect(game.score()).toEqual(0);
  });

  it("should score 2 with two ones", () => {
    game.roll([1, 1, 3, 4, 5]);

    expect(game.score()).toEqual(2);
  });

  it("should score 4 with two twos", () => {
    game.roll([2, 2, 4, 1, 5]);
    expect(game.score()).toEqual(4);
  });

  it("should score 9 with three threes", () => {
    game.roll([3, 3, 3, 5, 5]);
    expect(game.score()).toEqual(9);
  })
});
