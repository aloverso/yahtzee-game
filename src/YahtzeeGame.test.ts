import { YahtzeeGame } from "./YahtzeeGame";

describe("Yahtzee Game", () => {
  it("starts with score 0", () => {
    expect(new YahtzeeGame().score()).toEqual(0);
  });

  describe("scoring categories", () => {
    describe("sum of 1s", () => {
      it("score reflects sum total of dice with 1 value", () => {
        const game = new YahtzeeGame();
        game.roll(1, 2, 3, 4, 5);
        expect(game.score()).toEqual(1);
      });

      // it("score is 0 when roll does not contain 1", () => {
      //   const game = new YahtzeeGame();
      //   game.roll(5, 2, 3, 4, 5);
      //   expect(game.score()).toEqual(0);
      // });
    });
  });
});
