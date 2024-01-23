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

  describe("score of three of a kind", () => {
    it.each(
      [
        [[1, 3, 3, 3, 6], 16],
        [[2, 4, 4, 4, 4], 18],
        [[5, 5, 5, 5, 5], 25],
        [[1, 5, 5, 3, 4], 0],
      ]
    )("score matches expected val", (diceValues, expectedSum) => {
      const categoryScorer = new YahtzeeCategoryScorer();
      categoryScorer.score(diceValues)
      expect(categoryScorer.scoreOfThreeOfAKind()).toEqual(expectedSum);
    })
  });

  describe("score of four of a kind", () => {
    it.each(
      [
        [[1, 3, 3, 3, 6], 0],
        [[2, 4, 4, 4, 4], 18],
        [[5, 5, 5, 5, 5], 25],
        [[1, 5, 5, 3, 4], 0],
      ]
    )("score matches expected val", (diceValues, expectedSum) => {
      const categoryScorer = new YahtzeeCategoryScorer();
      categoryScorer.score(diceValues)
      expect(categoryScorer.scoreOfFourOfAKind()).toEqual(expectedSum);
    })
  });

  describe("score of full house", () => {
    it.each(
      [
        [[6, 3, 3, 3, 6], 25],
        [[1, 4, 4, 4, 1], 25],
        [[2, 4, 4, 4, 4], 0],
        [[5, 5, 5, 5, 5], 0],
        [[1, 5, 5, 3, 4], 0],
      ]
    )("score matches expected val", (diceValues, expectedSum) => {
      const categoryScorer = new YahtzeeCategoryScorer();
      categoryScorer.score(diceValues)
      expect(categoryScorer.scoreFullHouse()).toEqual(expectedSum);
    })
  });

  describe("score of small straight", () => {
    it.each(
      [
        [[1, 3, 2, 6, 4], 30],
        [[1, 2, 3, 4, 5], 30],
        [[2, 3, 4, 5, 4], 30],
        [[5, 5, 5, 5, 5], 0],
        [[1, 5, 5, 3, 4], 0],
      ]
    )("score matches expected val", (diceValues, expectedSum) => {
      const categoryScorer = new YahtzeeCategoryScorer();
      categoryScorer.score(diceValues)
      expect(categoryScorer.scoreSmallStraight()).toEqual(expectedSum);
    })
  });

  describe("score of large straight", () => {
    it.each(
      [
        [[1, 3, 2, 6, 4], 0],
        [[1, 2, 3, 4, 5], 40],
        [[6, 2, 3, 4, 5], 40],
        [[2, 3, 4, 5, 4], 0],
        [[5, 5, 5, 5, 5], 0],
        [[1, 5, 5, 3, 4], 0],
      ]
    )("score matches expected val", (diceValues, expectedSum) => {
      const categoryScorer = new YahtzeeCategoryScorer();
      categoryScorer.score(diceValues)
      expect(categoryScorer.scoreLargeStraight()).toEqual(expectedSum);
    })
  });

  describe("score of yahtzee", () => {
    it.each(
      [
        [[1, 1, 1, 1, 1], 50],
        [[4, 4, 4, 4, 4], 50],
        [[2, 3, 4, 5, 4], 0],
        [[5, 5, 5, 5, 1], 0],
        [[1, 5, 5, 3, 4], 0],
      ]
    )("score matches expected val", (diceValues, expectedSum) => {
      const categoryScorer = new YahtzeeCategoryScorer();
      categoryScorer.score(diceValues)
      expect(categoryScorer.scoreYahtzee()).toEqual(expectedSum);
    })
  });

  describe("chance", () => {
    it.each(
      [
        [[5, 5, 5, 5, 1], 21],
      ]
    )("score matches expected val", (diceValues, expectedSum) => {
      const categoryScorer = new YahtzeeCategoryScorer();
      categoryScorer.score(diceValues)
      expect(categoryScorer.scoreChance()).toEqual(expectedSum);
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
      threeOfAKind: 0,
      fourOfAKind: 0,
      fullHouse: 0,
      smallStraight: 30,
      largeStraight: 40,
      yahtzee: 0,
      chance: 15,
    })

    expect(categoryScorer.score([6,6,6,6,1])).toEqual({
      ones: 1,
      twos: 0,
      threes: 0,
      fours: 0,
      fives: 0,
      sixes: 24,
      threeOfAKind: 25,
      fourOfAKind: 25,
      fullHouse: 0,
      smallStraight: 0,
      largeStraight: 0,
      yahtzee: 0,
      chance: 25,
    })

    expect(categoryScorer.score([6,6,6,6,6])).toEqual({
      ones: 0,
      twos: 0,
      threes: 0,
      fours: 0,
      fives: 0,
      sixes: 30,
      threeOfAKind: 30,
      fourOfAKind: 30,
      fullHouse: 0,
      smallStraight: 0,
      largeStraight: 0,
      yahtzee: 50,
      chance: 30,
    })

    expect(categoryScorer.score([6,6,6,2,2])).toEqual({
      ones: 0,
      twos: 4,
      threes: 0,
      fours: 0,
      fives: 0,
      sixes: 18,
      threeOfAKind: 22,
      fourOfAKind: 0,
      fullHouse: 25,
      smallStraight: 0,
      largeStraight: 0,
      yahtzee: 0,
      chance: 22,
    })
  })
})