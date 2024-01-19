import { YahtzeeGame } from "./YahtzeeGame";

describe("Yahtzee Game", () => {
  it("starts with score 0", () => {
    expect(new YahtzeeGame().score()).toEqual(0);
  });

  // it("roll ones and score adds the sum of 1s", () => {
  //   const game = new YahtzeeGame();
  //   game.roll([1, 1, 1, 4, 5]);
  //   expect(game.score()).toEqual(3);
  // });

  it("scores yahtzee properly on round 1", () => {
    const game = new YahtzeeGame();
    game.roll([1, 1, 1, 1, 1]);
    expect(game.score()).toEqual(50);
  });

  it("doesn't score a yahtzee if a yahtzee wasn't rolled", () => {
    const game = new YahtzeeGame();
    game.roll([1, 3, 1, 1, 1]);
    expect(game.score()).not.toEqual(50);
  });

  it("scores large straight properly on round 1", () => {
    const game1 = new YahtzeeGame();
    game1.roll([1, 2, 3, 4, 5]);
    expect(game1.score()).toEqual(40);

    const game2 = new YahtzeeGame();
    game2.roll([6, 2, 3, 4, 5]);
    expect(game2.score()).toEqual(40);
  });

  it("scores small straight properly on round 1", () => {
    const game1 = new YahtzeeGame();
    game1.roll([1, 2, 3, 4, 6]);
    expect(game1.score()).toEqual(30);

    const game2 = new YahtzeeGame();
    game2.roll([3, 2, 3, 4, 5]);
    expect(game2.score()).toEqual(30);

    const game3 = new YahtzeeGame();
    game3.roll([3, 6, 3, 4, 5]);
    expect(game3.score()).toEqual(30);
  });

  // REMINDER: TEST STRAIGHTS THAT CAN BE BIG OR SMALL DEPENDING ON WHATS TAKEN

  it("scores full house properly on round 1", () => {
    const game1 = new YahtzeeGame();
    game1.roll([1,1,2,2,2]);
    expect(game1.score()).toEqual(25);

  });
  // testing
});
