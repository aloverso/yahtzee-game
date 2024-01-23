import {YahtzeeGame} from './YahtzeeGame'
import {YahtzeeChooser} from "./YahtzeeChooser";
import {YahtzeeCategoryScorer} from "./YahtzeeCategoryScorer";
import {generateCategoryScores, StubCategoryScorer, StubChooser} from "./test-helpers";
import {Scorecard} from "./Scorecard";

describe('Yahtzee Game', () => {

  let chooser: StubChooser;
  let categoryScorer: StubCategoryScorer;
  let scorecard: Scorecard;

  beforeEach(() => {
    chooser = new StubChooser()
    categoryScorer = new StubCategoryScorer()
    scorecard = new Scorecard()
  })

  it('starts with score 0', () => {
    expect(new YahtzeeGame(categoryScorer, chooser, scorecard).score()).toEqual(0)
  })

  it('ends the game after thirteen rounds', () => {
    const game = new YahtzeeGame(categoryScorer, chooser, scorecard);
    chooser.setChooseReturn(1)
    for (let i = 0; i < 13; i++) {
      game.roll([1,1,1,1,1])
    }
    expect(game.score()).toEqual(13)
    game.roll([1,1,1,1,1])
    expect(game.score()).toEqual(13)
  })

  it('uses a chooser and a categoryScorer to choose and score a category', () => {
    const game = new YahtzeeGame(categoryScorer, chooser, scorecard);
    const scores = generateCategoryScores({ ones: 1, twos: 2 })
    categoryScorer.setScoreReturn(scores)
    chooser.setChooseReturn(2)
    game.roll([1,2,3,4,5])
    expect(game.score()).toEqual(2)
    expect(categoryScorer.scoreCalledWith).toEqual([1,2,3,4,5])
    expect(chooser.chooseCalledWith).toEqual(scores)
  })

  it('plays a real game', () => {
    const scorecard = new Scorecard()
    const realChooser = new YahtzeeChooser(scorecard)
    const realCategoryScorer = new YahtzeeCategoryScorer()
    const game = new YahtzeeGame(realCategoryScorer, realChooser, scorecard);
    game.roll([1,2,2,1,5])
    expect(game.score()).toEqual(11) // score chance
    game.roll([1,2,2,1,5])
    expect(game.score()).toEqual(16) // score fives
  })
})

