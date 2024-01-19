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
});
