import {YahtzeeChooser} from "./YahtzeeChooser";
import {generateCategoryScores} from "./test-helpers";
import {Scorecard} from "./Scorecard";

describe('YahtzeeChooser', () => {
  it('chooses highest score from categories', () => {
    const chooser = new YahtzeeChooser(new Scorecard());
    const scores = generateCategoryScores({ ones: 1, twos: 2 })
    expect(chooser.choose(scores)).toEqual(2)
  })

  it('chooses highest score from categories not yet chosen', () => {
    const chooser = new YahtzeeChooser(new Scorecard());
    const scores = generateCategoryScores({ ones: 1, twos: 2 })
    expect(chooser.choose(scores)).toEqual(2)
    expect(chooser.choose(scores)).toEqual(1)
  })

  it('marks yahtzee bonus when it cannot choose a second yahtzee', () => {
    const scorecard = new Scorecard()
    const chooser = new YahtzeeChooser(scorecard);
    const scores = generateCategoryScores({ ones: 1, twos: 2, yahtzee: 50 })
    expect(chooser.choose(scores)).toEqual(50)
    expect(scorecard.hasYahtzeeBonus()).toEqual(false)
    expect(chooser.choose(scores)).toEqual(2)
    expect(scorecard.hasYahtzeeBonus()).toEqual(true)
  })
})
