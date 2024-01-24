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

  it('applies bonuses at game end', () => {
    const scorecard = new Scorecard()
    const realChooser = new YahtzeeChooser(scorecard)
    const realCategoryScorer = new YahtzeeCategoryScorer()
    const game = new YahtzeeGame(realCategoryScorer, realChooser, scorecard);
    game.roll([5,5,5,5,5])
    expect(game.score()).toEqual(50) // score yahtzee
    game.roll([5,5,5,5,5])
    expect(game.score()).toEqual(75) // score fives +25
    game.roll([5,5,5,5,5])
    expect(game.score()).toEqual(100) // score 4 of a kind +25
    game.roll([5,5,5,5,5])
    expect(game.score()).toEqual(125) // score 3 of a kind +25
    game.roll([5,5,5,5,5])
    expect(game.score()).toEqual(150) // score chance +25
    game.roll([1,1,1,1,1])
    expect(game.score()).toEqual(155) // score ones
    game.roll([2,2,2,2,2])
    expect(game.score()).toEqual(165) // score twos
    game.roll([3,3,3,3,3])
    expect(game.score()).toEqual(180) // score threes
    game.roll([4,4,4,4,4])
    expect(game.score()).toEqual(200) // score fours
    game.roll([6,6,6,6,6])
    expect(game.score()).toEqual(230) // score sixes
    game.roll([5,5,5,5,5])
    expect(game.score()).toEqual(230) // score full house
    game.roll([5,5,5,5,5])
    expect(game.score()).toEqual(230) // score small straight
    game.roll([5,5,5,5,5])
    expect(game.score()).toEqual(365) // score large straight + one-through-six bonus + yahtzee bonus
  })
})

