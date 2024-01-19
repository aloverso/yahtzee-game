import { YahtzeeGame } from "./YahtzeeGame";

describe("Yahtzee Game", () => {
  let game: YahtzeeGame;

  beforeEach(() => {
    game = new YahtzeeGame();
  });

  it("starts with score 0", () => {
    expect(game.score()).toEqual(0);
  });

  it("should score 2 with two ones in the 'ones' category on the first round", () => {
    game.roll([1, 1, 3, 4, 5]);

    expect(game.score()).toEqual(2);
  });

  it("should score 4 with two twos in the 'twos' category on the first round", () => {
    game.roll([2, 2, 4, 1, 5]);
    expect(game.score()).toEqual(4);
  });

  it("should score 6 with two threes in the 'threes' category on the first round", () => {
    game.roll([3, 3, 1, 2, 5]);
    expect(game.score()).toEqual(6);
  });

  it("should score total of all 5 dice 4 of a kind on the first round", () => {
    game.roll([2, 2, 2, 2, 6]);
    expect(game.score()).toEqual(14);
  });

  it("should score total of all 5 dice 3 of a kind on the first round", () => {
    game.roll([2, 2, 2, 5, 6]);
    expect(game.score()).toEqual(17);
  });

  it("should score 25 points when there is a full house on the first round", () => {
    game.roll([2, 2, 2, 3, 3]);
    expect(game.score()).toEqual(25);
  });

  it("should score 50 with 5 of a kind on the first round", () => {
    game.roll([1, 1, 1, 1, 1]);
    expect(game.score()).toEqual(50);
  });
});
