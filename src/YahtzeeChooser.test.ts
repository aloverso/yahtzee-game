import {YahtzeeChooser} from "./YahtzeeChooser";
import {generateCategoryScores} from "./test-helpers";

describe('YahtzeeChooser', () => {
  it('chooses highest score from categories', () => {
    const chooser = new YahtzeeChooser();
    const scores = generateCategoryScores({ ones: 1, twos: 2 })
    expect(chooser.choose(scores)).toEqual(2)
  })

  it('chooses highest score from categories not yet chosen', () => {
    const chooser = new YahtzeeChooser();
    const scores = generateCategoryScores({ ones: 1, twos: 2 })
    expect(chooser.choose(scores)).toEqual(2)
    expect(chooser.choose(scores)).toEqual(1)
  })
})
