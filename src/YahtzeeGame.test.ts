import { Categories, YahtzeeGame } from "./YahtzeeGame";

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
        const categories = new Categories(diceValues);
        expect(categories.sumOfOnes()).toEqual(expectedSum);
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
        const categories = new Categories(diceValues);
        expect(categories.sumOfTwos()).toEqual(expectedSum);
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
        const categories = new Categories(diceValues);
        expect(categories.sumOfThrees()).toEqual(expectedSum);
      })
    });

    describe("sum of 4s", () => {
      it.each(
          [
              [[1, 2, 3, 4, 5], 4],
              [[2, 4, 4, 4, 4], 16],
              [[5, 1, 6, 3, 5], 0],
          ]
      )("score matches expected val", (diceValues, expectedSum) => {
        const categories = new Categories(diceValues);
        expect(categories.sumOfFours()).toEqual(expectedSum);
      })
    });

    describe("sum of 5s", () => {
      it.each(
          [
              [[1, 2, 3, 4, 5], 5],
              [[2, 5, 5, 5, 5], 20],
              [[1, 1, 6, 4, 3], 0],
          ]
      )("score matches expected val", (diceValues, expectedSum) => {
        const categories = new Categories(diceValues);
        expect(categories.sumOfFives()).toEqual(expectedSum);
      })
    });

    describe("sum of 6s", () => {
      it.each(
          [
              [[1, 2, 3, 4, 6], 6],
              [[2, 6, 6, 6, 5], 18],
              [[5, 1, 2, 4, 5], 0],
          ]
      )("score matches expected val", (diceValues, expectedSum) => {
        const categories = new Categories(diceValues);
        expect(categories.sumOfSixes()).toEqual(expectedSum);
      })
    });

    describe("sum of three of a kind", () => {
      it.each(
          [
              [[1, 3, 3, 3, 6], 16],
              [[2, 4, 4, 4, 4], 18],
              [[5, 5, 5, 5, 5], 25],
              [[1, 5, 5, 3, 4], 0],
          ]
      )("score matches expected val", (diceValues, expectedSum) => {
        const categories = new Categories(diceValues);
        expect(categories.sumOfThreeOfAKind()).toEqual(expectedSum);
      })
    });
  });
});

