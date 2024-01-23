import {YahtzeeChooser} from "./YahtzeeChooser";

describe('YahtzeeChooser', () => {
  it('chooses highest score from categories', () => {
    const chooser = new YahtzeeChooser();
    expect(chooser.choose({ ones: 1, twos: 2})).toEqual(2)
  })

  it('chooses highest score from categories not yet chosen', () => {
    const chooser = new YahtzeeChooser();
    expect(chooser.choose({ ones: 1, twos: 2})).toEqual(2)
    expect(chooser.choose({ ones: 1, twos: 2})).toEqual(1)
  })
})
