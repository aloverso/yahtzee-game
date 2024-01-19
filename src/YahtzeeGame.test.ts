import { YahtzeeGame, possibleCategories, scorer } from "./YahtzeeGame";

describe("Yahtzee Game", () => {
  let game: YahtzeeGame;

  beforeEach(() => {
    game = new YahtzeeGame();
  });

  it("starts with score 0", () => {
    expect(game.score()).toEqual(0);
  });

  describe("Roll", () => {
    it("increases the score always on the first roll", () => {
      game.roll({ ones: 0, twos: 0, threes: 0, fours: 0, fives: 0, sixes: 5 });
      expect(game.score()).toBeGreaterThan(0);
    });
  });

  describe("Game", () => {
    it("scores yahtzee on first roll, four of a kind on second yahtzee", () => {
      game.roll({ ones: 0, twos: 0, threes: 0, fours: 0, fives: 0, sixes: 5 });
      expect(game.score()).toBeGreaterThan(50);

      game.roll({ ones: 0, twos: 0, threes: 0, fours: 0, fives: 0, sixes: 5 });
      expect(game.score()).toBeGreaterThan(50 + 6 * 5);
    });
  });

  describe("Scorer function", () => {
    it("if there's a yahtzee, the scorer will return 50 points", () => {
      const possibleCategories = {
        ones: false,
        twos: false,
        threes: false,
        fours: false,
        fives: false,
        sixes: true,
        threeOfAKind: true,
        fourOfAKind: true,
        fullHouse: false,
        smallStraight: false,
        largeStraight: false,
        yahtzee: true,
        chance: true,
      }

      const score = scorer(possibleCategories);
      expect(score).toEqual(50);
    });

    it("if there's a large straight and no yahtzee, the scorer will return 40 points", () => {
      const possibleCategories = {
        ones: false,
        twos: false,
        threes: false,
        fours: false,
        fives: false,
        sixes: false,
        threeOfAKind: false,
        fourOfAKind: false,
        fullHouse: false,
        smallStraight: true,
        largeStraight: true,
        yahtzee: false,
        chance: true,
      }

      const score = scorer(possibleCategories);
      expect(score).toEqual(40);
    });
  });

  describe("PossibleCategories", () => {
    it("ones", () => {
      const roll = {
        ones: 5,
        twos: 0,
        threes: 0,
        fours: 0,
        fives: 0,
        sixes: 0,
      };
      expect(possibleCategories(roll).ones).toEqual(true);
      expect(possibleCategories(roll).yahtzee).toEqual(true);
      expect(possibleCategories(roll).chance).toEqual(true);
    });

    it("twos", () => {
      const roll = {
        ones: 0,
        twos: 5,
        threes: 0,
        fours: 0,
        fives: 0,
        sixes: 0,
      };
      expect(possibleCategories(roll).twos).toEqual(true);
      expect(possibleCategories(roll).yahtzee).toEqual(true);
      expect(possibleCategories(roll).chance).toEqual(true);
    });

    it("threes", () => {
      const roll = {
        ones: 0,
        twos: 0,
        threes: 5,
        fours: 0,
        fives: 0,
        sixes: 0,
      };
      expect(possibleCategories(roll).threes).toEqual(true);
      expect(possibleCategories(roll).yahtzee).toEqual(true);
      expect(possibleCategories(roll).chance).toEqual(true);
    });

    it("fours", () => {
      const roll = {
        ones: 0,
        twos: 0,
        threes: 0,
        fours: 5,
        fives: 0,
        sixes: 0,
      };
      expect(possibleCategories(roll).fours).toEqual(true);
      expect(possibleCategories(roll).yahtzee).toEqual(true);
      expect(possibleCategories(roll).chance).toEqual(true);
    });

    it("fives", () => {
      const roll = {
        ones: 0,
        twos: 0,
        threes: 0,
        fours: 0,
        fives: 5,
        sixes: 0,
      };
      expect(possibleCategories(roll).fives).toEqual(true);
      expect(possibleCategories(roll).yahtzee).toEqual(true);
      expect(possibleCategories(roll).chance).toEqual(true);
    });

    it("sixes", () => {
      const roll = {
        ones: 0,
        twos: 0,
        threes: 0,
        fours: 0,
        fives: 0,
        sixes: 5,
      };
      expect(possibleCategories(roll).sixes).toEqual(true);
      expect(possibleCategories(roll).yahtzee).toEqual(true);
      expect(possibleCategories(roll).chance).toEqual(true);
    });

    it("threeOfAKind when there is a 3 of a kind", () => {
      const roll = {
        ones: 0,
        twos: 2,
        threes: 0,
        fours: 3,
        fives: 0,
        sixes: 0,
      };
      expect(possibleCategories(roll).twos).toEqual(true);
      expect(possibleCategories(roll).fours).toEqual(true);
      expect(possibleCategories(roll).threeOfAKind).toEqual(true);
      expect(possibleCategories(roll).yahtzee).toEqual(false);
      expect(possibleCategories(roll).chance).toEqual(true);
    });

    it("threeOfAKind when there is a 4 of a kind", () => {
      const roll = {
        ones: 1,
        twos: 0,
        threes: 0,
        fours: 0,
        fives: 4,
        sixes: 0,
      };
      expect(possibleCategories(roll).ones).toEqual(true);
      expect(possibleCategories(roll).fives).toEqual(true);
      expect(possibleCategories(roll).threeOfAKind).toEqual(true);
      expect(possibleCategories(roll).yahtzee).toEqual(false);
      expect(possibleCategories(roll).chance).toEqual(true);
    });

    it("fourOfAKind when there is a 4 of a kind", () => {
      const roll = {
        ones: 0,
        twos: 1,
        threes: 0,
        fours: 4,
        fives: 0,
        sixes: 0,
      };
      expect(possibleCategories(roll).twos).toEqual(true);
      expect(possibleCategories(roll).fours).toEqual(true);
      expect(possibleCategories(roll).threeOfAKind).toEqual(true);
      expect(possibleCategories(roll).fourOfAKind).toEqual(true);
      expect(possibleCategories(roll).yahtzee).toEqual(false);
      expect(possibleCategories(roll).chance).toEqual(true);
    });

    it("fourOfAKind when there is a 5 of a kind", () => {
      const roll = {
        ones: 0,
        twos: 0,
        threes: 0,
        fours: 0,
        fives: 5,
        sixes: 0,
      };
      expect(possibleCategories(roll).fives).toEqual(true);
      expect(possibleCategories(roll).threeOfAKind).toEqual(true);
      expect(possibleCategories(roll).fourOfAKind).toEqual(true);
      expect(possibleCategories(roll).yahtzee).toEqual(true);
      expect(possibleCategories(roll).chance).toEqual(true);
    });

    it("fullhouse when there is a 2 and 3 of a kind", () => {
      const roll = {
        ones: 0,
        twos: 2,
        threes: 0,
        fours: 3,
        fives: 0,
        sixes: 0,
      };
      expect(possibleCategories(roll).twos).toEqual(true);
      expect(possibleCategories(roll).fours).toEqual(true);
      expect(possibleCategories(roll).threeOfAKind).toEqual(true);
      expect(possibleCategories(roll).fullHouse).toEqual(true);
      expect(possibleCategories(roll).yahtzee).toEqual(false);
      expect(possibleCategories(roll).chance).toEqual(true);
    });

    it("not a fullhouse when four of a kind", () => {
      const roll = {
        ones: 0,
        twos: 1,
        threes: 0,
        fours: 4,
        fives: 0,
        sixes: 0,
      };
      expect(possibleCategories(roll).twos).toEqual(true);
      expect(possibleCategories(roll).fours).toEqual(true);
      expect(possibleCategories(roll).threeOfAKind).toEqual(true);
      expect(possibleCategories(roll).fullHouse).toEqual(false);
      expect(possibleCategories(roll).yahtzee).toEqual(false);
      expect(possibleCategories(roll).chance).toEqual(true);
    });

    it("smallStraight when every 4 dice are rolled once", () => {
      const roll = {
        ones: 0,
        twos: 2,
        threes: 1,
        fours: 1,
        fives: 1,
        sixes: 0,
      };
      expect(possibleCategories(roll).twos).toEqual(true);
      expect(possibleCategories(roll).threes).toEqual(true);
      expect(possibleCategories(roll).fours).toEqual(true);
      expect(possibleCategories(roll).fives).toEqual(true);
      expect(possibleCategories(roll).smallStraight).toEqual(true);
      expect(possibleCategories(roll).yahtzee).toEqual(false);
      expect(possibleCategories(roll).chance).toEqual(true);
    });

    it("large when every 5 dice are rolled once", () => {
      const roll = {
        ones: 0,
        twos: 1,
        threes: 1,
        fours: 1,
        fives: 1,
        sixes: 1,
      };
      expect(possibleCategories(roll).ones).toEqual(false);
      expect(possibleCategories(roll).twos).toEqual(true);
      expect(possibleCategories(roll).threes).toEqual(true);
      expect(possibleCategories(roll).fours).toEqual(true);
      expect(possibleCategories(roll).fives).toEqual(true);
      expect(possibleCategories(roll).sixes).toEqual(true);
      expect(possibleCategories(roll).smallStraight).toEqual(true);
      expect(possibleCategories(roll).largeStraight).toEqual(true);
      expect(possibleCategories(roll).threeOfAKind).toEqual(false);
      expect(possibleCategories(roll).fourOfAKind).toEqual(false);
      expect(possibleCategories(roll).fullHouse).toEqual(false);
      expect(possibleCategories(roll).yahtzee).toEqual(false);
      expect(possibleCategories(roll).chance).toEqual(true);
    });

    it("finds a yahtzee if there's a yahtzee", () => {
      const roll = {
        ones: 0,
        twos: 0,
        threes: 0,
        fours: 0,
        fives: 0,
        sixes: 5,
      };
      expect(possibleCategories(roll).ones).toEqual(false);
      expect(possibleCategories(roll).twos).toEqual(false);
      expect(possibleCategories(roll).threes).toEqual(false);
      expect(possibleCategories(roll).fours).toEqual(false);
      expect(possibleCategories(roll).fives).toEqual(false);
      expect(possibleCategories(roll).sixes).toEqual(true);
      expect(possibleCategories(roll).smallStraight).toEqual(false);
      expect(possibleCategories(roll).largeStraight).toEqual(false);
      expect(possibleCategories(roll).threeOfAKind).toEqual(true);
      expect(possibleCategories(roll).fourOfAKind).toEqual(true);
      expect(possibleCategories(roll).fullHouse).toEqual(false);
      expect(possibleCategories(roll).yahtzee).toEqual(true);
      expect(possibleCategories(roll).chance).toEqual(true);
    });

    it("finds chance for any possible roll", () => {
      const roll = {
        ones: 1,
        twos: 2,
        threes: 1,
        fours: 0,
        fives: 0,
        sixes: 1,
      };
      expect(possibleCategories(roll).chance).toEqual(true);
    });
  });
});
