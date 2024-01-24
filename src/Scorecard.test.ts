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

  describe('onesThroughSixes bonus', () => {
    it('returns onesThroughSixes bonus if total is 63 points or greater', () => {
      const scorecard = new Scorecard()
      expect(scorecard.hasOnesThroughSixesBonus()).toEqual(false)
      scorecard.scoreCategory('ones', 10)
      scorecard.scoreCategory('twos', 10)
      scorecard.scoreCategory('threes', 10)
      scorecard.scoreCategory('fours', 10)
      scorecard.scoreCategory('fives', 10)
      scorecard.scoreCategory('sixes', 13)
      expect(scorecard.hasOnesThroughSixesBonus()).toEqual(true)
    })

    it('does not score onesThroughSixes bonus if total is 62 points or less', () => {
      const scorecard = new Scorecard()
      expect(scorecard.hasOnesThroughSixesBonus()).toEqual(false)
      scorecard.scoreCategory('ones', 10)
      scorecard.scoreCategory('twos', 10)
      scorecard.scoreCategory('threes', 10)
      scorecard.scoreCategory('fours', 10)
      scorecard.scoreCategory('fives', 10)
      scorecard.scoreCategory('sixes', 12)
      expect(scorecard.hasOnesThroughSixesBonus()).toEqual(false)
    })

    it('does not score onesThroughSixes bonus from counting other categories', () => {
      const scorecard = new Scorecard()
      expect(scorecard.hasOnesThroughSixesBonus()).toEqual(false)
      scorecard.scoreCategory('ones', 10)
      scorecard.scoreCategory('twos', 10)
      scorecard.scoreCategory('threes', 10)
      scorecard.scoreCategory('fours', 10)
      scorecard.scoreCategory('fives', 10)
      scorecard.scoreCategory('sixes', 12)
      scorecard.scoreCategory('fullHouse', 12)
      scorecard.scoreCategory('fourOfAKind', 12)
      scorecard.scoreCategory('yahtzee', 12)
      scorecard.scoreCategory('smallStraight', 12)
      scorecard.scoreCategory('largeStraight', 12)
      scorecard.scoreCategory('chance', 12)
      expect(scorecard.hasOnesThroughSixesBonus()).toEqual(false)
    })
  })

})