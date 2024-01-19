import { YahtzeeGame, Categories } from "./YahtzeeGame";

const CATEGORIES = new Categories();

describe("Yahtzee Game", () => {
  it("starts with score 0", () => {
    expect(new YahtzeeGame().score()).toEqual(0);
  });

  describe("scoring categories", () => {
    describe("sum of 1s", () => {
      it.each(
          [
              [[1, 2, 3, 4, 5], 1],
              [[1, 1, 1, 1, 5], 4],
              [[5, 2, 3, 4, 5], 0],
          ]
      )("score matches expected val", (diceValues, expectedSum) => {
        expect(CATEGORIES.sumOfOnes(diceValues)).toEqual(expectedSum);
      })
    });

    describe("sum of 2s", () => {
      it.each(
          [
              [[1, 2, 3, 4, 5], 2],
              [[2, 2, 2, 2, 5], 8],
              [[5, 1, 3, 4, 5], 0],
          ]
      )("score matches expected val", (diceValues, expectedSum) => {
        expect(CATEGORIES.sumOfTwos(diceValues)).toEqual(expectedSum);
      })
    });

    describe("sum of 3s", () => {
      it.each(
          [
              [[1, 2, 3, 4, 5], 3],
              [[2, 3, 3, 3, 5], 9],
              [[5, 1, 6, 4, 5], 0],
          ]
      )("score matches expected val", (diceValues, expectedSum) => {
        expect(CATEGORIES.sumOfThrees(diceValues)).toEqual(expectedSum);
      })
    });
  });
});

