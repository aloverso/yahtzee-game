import {YahtzeeChooser} from "./YahtzeeChooser";

describe('YahtzeeChooser', () => {
  it('chooses highest score from categories', () => {
    const chooser = new YahtzeeChooser();
    expect(chooser.choose({ ones: 1, twos: 2, threes: 0, fours: 0, fives: 0, sixes: 0 })).toEqual(2)
  })

  it('chooses highest score from categories not yet chosen', () => {
    const chooser = new YahtzeeChooser();
    expect(chooser.choose({ ones: 1, twos: 2, threes: 0, fours: 0, fives: 0, sixes: 0 })).toEqual(2)
    expect(chooser.choose({ ones: 1, twos: 2, threes: 0, fours: 0, fives: 0, sixes: 0 })).toEqual(1)
  })
})
