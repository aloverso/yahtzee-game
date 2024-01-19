import { YahtzeeGame, possibleCategories } from "./YahtzeeGame";

describe("Yahtzee Game", () => {
  it("starts with score 0", () => {
    expect(new YahtzeeGame().score()).toEqual(0);
  });
});

describe("Roll", () => {
  it("increases the score always on the first roll", () => {
    const yahtzee = new YahtzeeGame();
    yahtzee.roll({ ones: 0, twos: 0, threes: 0, fours: 0, fives: 0, sixes: 5 });
    expect(yahtzee.score()).toBeGreaterThan(0);
  });
});

describe("PossibleCategories", () => {
  it("ones", () => {
    const roll = { ones: 5, twos: 0, threes: 0, fours: 0, fives: 0, sixes: 0 };
    expect(possibleCategories(roll).ones).toEqual(true);
  });

  it("twos", () => {
    const roll = { ones: 0, twos: 5, threes: 0, fours: 0, fives: 0, sixes: 0 };
    expect(possibleCategories(roll).twos).toEqual(true);
  });

  it("threes", () => {
    const roll = { ones: 0, twos: 0, threes: 5, fours: 0, fives: 0, sixes: 0 };
    expect(possibleCategories(roll).threes).toEqual(true);
  });

  it("fours", () => {
    const roll = { ones: 0, twos: 0, threes: 0, fours: 5, fives: 0, sixes: 0 };
    expect(possibleCategories(roll).fours).toEqual(true);
  });

  it("fives", () => {
    const roll = { ones: 0, twos: 0, threes: 0, fours: 0, fives: 5, sixes: 0 };
    expect(possibleCategories(roll).fives).toEqual(true);
  });

  it("sixes", () => {
    const roll = { ones: 0, twos: 0, threes: 0, fours: 0, fives: 0, sixes: 5 };
    expect(possibleCategories(roll).sixes).toEqual(true);
  });

  it("threeOfAKind when there is a 3 of a kind", () => {
    const roll = { ones: 0, twos: 2, threes: 0, fours: 3, fives: 0, sixes: 0 };
    expect(possibleCategories(roll).twos).toEqual(true);
    expect(possibleCategories(roll).fours).toEqual(true);
    expect(possibleCategories(roll).threeOfAKind).toEqual(true);
  });

  it("threeOfAKind when there is a 4 of a kind", () => {
    const roll = { ones: 1, twos: 0, threes: 0, fours: 0, fives: 4, sixes: 0 };
    expect(possibleCategories(roll).ones).toEqual(true);
    expect(possibleCategories(roll).fives).toEqual(true);
    expect(possibleCategories(roll).threeOfAKind).toEqual(true);
  });

  it("fourOfAKind when there is a 4 of a kind", () => {
    const roll = { ones: 0, twos: 1, threes: 0, fours: 4, fives: 0, sixes: 0 };
    expect(possibleCategories(roll).twos).toEqual(true);
    expect(possibleCategories(roll).fours).toEqual(true);
    expect(possibleCategories(roll).threeOfAKind).toEqual(true);
    expect(possibleCategories(roll).fourOfAKind).toEqual(true);
  });

  it("fourOfAKind when there is a 5 of a kind", () => {
    const roll = { ones: 0, twos: 0, threes: 0, fours: 0, fives: 5, sixes: 0 };
    expect(possibleCategories(roll).fives).toEqual(true);
    expect(possibleCategories(roll).threeOfAKind).toEqual(true);
    expect(possibleCategories(roll).fourOfAKind).toEqual(true);
  });

  it("fullhouse when there is a 2 and 3 of a kind", () => {
    const roll = { ones: 0, twos: 2, threes: 0, fours: 3, fives: 0, sixes: 0 };
    expect(possibleCategories(roll).twos).toEqual(true);
    expect(possibleCategories(roll).fours).toEqual(true);
    expect(possibleCategories(roll).threeOfAKind).toEqual(true);
    expect(possibleCategories(roll).fullHouse).toEqual(true);
  });

  it("not a fullhouse when four of a kind", () => {
    const roll = { ones: 0, twos: 1, threes: 0, fours: 4, fives: 0, sixes: 0 };
    expect(possibleCategories(roll).twos).toEqual(true);
    expect(possibleCategories(roll).fours).toEqual(true);
    expect(possibleCategories(roll).threeOfAKind).toEqual(true);
    expect(possibleCategories(roll).fullHouse).toEqual(false);
  });

  it("smallStraight when every 4 dice are rolled once", () => {
    const roll = { ones: 0, twos: 2, threes: 1, fours: 1, fives: 1, sixes: 0 };
    expect(possibleCategories(roll).twos).toEqual(true);
    expect(possibleCategories(roll).threes).toEqual(true);
    expect(possibleCategories(roll).fours).toEqual(true);
    expect(possibleCategories(roll).fives).toEqual(true);
    expect(possibleCategories(roll).smallStraight).toEqual(true);
  });

  it("large when every 5 dice are rolled once", () => {
    const roll = { ones: 0, twos: 1, threes: 1, fours: 1, fives: 1, sixes: 1 };
    expect(possibleCategories(roll).twos).toEqual(true);
    expect(possibleCategories(roll).threes).toEqual(true);
    expect(possibleCategories(roll).fours).toEqual(true);
    expect(possibleCategories(roll).fives).toEqual(true);
    expect(possibleCategories(roll).sixes).toEqual(true);
    expect(possibleCategories(roll).smallStraight).toEqual(true);
    expect(possibleCategories(roll).largeStraight).toEqual(true);
  });



});
