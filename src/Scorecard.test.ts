import {Scorecard} from "./Scorecard";

describe('Scorecard', () => {
  it('returns if category is already scored', () => {
    const scorecard = new Scorecard()
    expect(scorecard.isAlreadyChosen('ones')).toEqual(false)
    expect(scorecard.isAlreadyChosen('twos')).toEqual(false)
    scorecard.scoreCategory('ones', 1)
    expect(scorecard.isAlreadyChosen('ones')).toEqual(true)
    expect(scorecard.isAlreadyChosen('twos')).toEqual(false)
    scorecard.scoreCategory('twos', 1)
    expect(scorecard.isAlreadyChosen('ones')).toEqual(true)
    expect(scorecard.isAlreadyChosen('twos')).toEqual(true)
  })

  it('saves if yahtzee bonus is applicable', () => {
    const scorecard = new Scorecard()
    expect(scorecard.hasYahtzeeBonus()).toEqual(false)
    scorecard.markYahtzeeBonus()
    expect(scorecard.hasYahtzeeBonus()).toEqual(true)
  })
})