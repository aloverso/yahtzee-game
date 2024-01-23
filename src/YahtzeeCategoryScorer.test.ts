import {YahtzeeCategoryScorer} from "./YahtzeeCategoryScorer";

describe('YahtzeeCategoryScorer', () => {
  describe("sum of 1s", () => {
    it.each(
      [
        [[1, 2, 3, 4, 5], 1],
        [[1, 1, 1, 1, 5], 4],
        [[5, 2, 3, 4, 5], 0],
      ]
    )("score matches expected val", (diceValues, expectedSum) => {
      const categoryScorer = new YahtzeeCategoryScorer();
      categoryScorer.score(diceValues)
      expect(categoryScorer.sumOfOnes()).toEqual(expectedSum);
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
      const categoryScorer = new YahtzeeCategoryScorer();
      categoryScorer.score(diceValues)
      expect(categoryScorer.sumOfTwos()).toEqual(expectedSum);
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
      const categoryScorer = new YahtzeeCategoryScorer();
      categoryScorer.score(diceValues)
      expect(categoryScorer.sumOfThrees()).toEqual(expectedSum);
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
      const categoryScorer = new YahtzeeCategoryScorer();
      categoryScorer.score(diceValues)
      expect(categoryScorer.sumOfFours()).toEqual(expectedSum);
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
      const categoryScorer = new YahtzeeCategoryScorer();
      categoryScorer.score(diceValues)
      expect(categoryScorer.sumOfFives()).toEqual(expectedSum);
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
      const categoryScorer = new YahtzeeCategoryScorer();
      categoryScorer.score(diceValues)
      expect(categoryScorer.sumOfSixes()).toEqual(expectedSum);
    })
  });

  it('returns entire categoryScore', () => {
    const categoryScorer = new YahtzeeCategoryScorer();
    expect(categoryScorer.score([1, 2, 3, 4, 5])).toEqual({
      ones: 1,
      twos: 2,
      threes: 3,
      fours: 4,
      fives: 5,
      sixes: 0,
    })
  })
})