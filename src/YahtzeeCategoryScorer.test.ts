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

  it('returns entire categoryScore', () => {
    const categoryScorer = new YahtzeeCategoryScorer();
    expect(categoryScorer.score([1, 2, 1, 2, 2])).toEqual({
      ones: 2,
      twos: 6
    })
  })
})