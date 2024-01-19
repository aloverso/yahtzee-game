# Yahtzee Game

This is the starter code for the Yahtzee game pair party in TypeScript. Credit to Hasbro for the [rules of Yahtzee](https://www.hasbro.com/common/instruct/yahtzee.pdf).

## Yahtzee Scoring Rules

In Yahtzee, each round a player rolls a total of five six-sided dice and fills in the results on a scorecard, attempting to maximize their score. There are player rules for the act of rolling, but our scoring program will skip over that aspect and simply receive the five dice results.

A dice roll may be worth a different point total depending on what category the player chooses to score it as. There are 13 total categories and each can only be scored once apiece - making the game a total of thirteen rounds, and the final player score is the sum of all scored points including bonuses at the end of the final round.

The categories are as follows:

| Category  | What to Score |
| ------------- | ------------- |
| Ones  | Sum of 1s rolled |
| Twos | Sum of 2s rolled |
| Threes | Sum of 3s rolled |
| Fours | Sum of 4s rolled |
| Fives | Sum of 5s rolled |
| Sixes | Sum of 6s rolled |
| 3 of a Kind | Total of all 5 dice |
| 4 of a Kind | Total of all 5 dice |
| Full House | 25 points |
| Small Straight | 30 points |
| Large Straight | 40 points |
| Yahtzee (5 of a Kind) | 50 points |
| Chance | Total of all 5 dice |

Categories can only be scored if the roll fulfills that category - ie, if you do not have "3 of a kind" in the five dice (three or more of the same number) then you cannot score that category.

If at any point you cannot (or do not want to) score your roll as any of the remaining categories, you must enter a zero to score in a category of your choice.

### Explanations
- A **small straight** is 4 dice that show a sequence of numbers
- A **large straight** is 5 dice that show a sequence of numbers
- A **full house** is achieved by 3 of one number, and 2 of another number
- **Chance** is a catch-all category to simply score the total of your five dice

### Bonuses

- If you score at least **63 points** total in the ones through sixes categories, then you receive a **35 point bonus**.

- If you roll a second Yahtzee when you have already scored the 50 points for a Yahtzee, you earn **100 bonus points**. Then, you score the Yahtzee as another category as appropriate.

## Requirements

We're going to write an automated scoring program for Yahtzee that receives each round's roll results and assigns them to a category to maximize points scored in the game.

Write a class `YahtzeeGame` that has these two public methods:

1. A `void roll()` is called with the five dice results as the parameter. You choose the data structure for the parameter(s)
2. A `int score()` returns the player's total score for that game. If the game is complete, include the bonuses. If the game is not yet complete, only return the current running score.

## Extensions

Ways to increase complexity if you've achieved the basic requirements:

### Error Handling
What if a player passes an invalid dice roll that includes a 7, a 0, or a -1? What else could go wrong?

### Scorecard
Add another public method to the class that returns the current state of the scorecard: each category, whether it has been scored yet, and if so how many points were scored.

### Multiplayer Game
Support a multiplayer game. Will you do this by *changing* the `Game` class logic? Or *extending* it?

### Player Override
Allow a player to specify which category they want to score the roll in. Include error handling - what happens in the case that the provided category is not actually available to be scored?

### Algorithmic complexity
Sometimes in Yahtzee, the best move on any given round is not to score the thing that gives you the most points immediately, hoping to save the opportunity to score more points in a category on a later roll. Consider adding more complexity to your algorithm responsible for deciding which category to score. How will you test this?

## Domain Defintions

### Roll
A roll is considered the set of 5 dice rolls. The function `roll()` is one round of the game.

### Set
The collection of the 5 rolled dice.

### Score
The running score of the game, which becomes the total score by the final round. 

### Roll Score Options
The set of all possible category scores for a roll.

### Category
All possible categories:

| Category  | What to Score |
| ------------- | ------------- |
| Ones  | Sum of 1s rolled |
| Twos | Sum of 2s rolled |
| Threes | Sum of 3s rolled |
| Fours | Sum of 4s rolled |
| Fives | Sum of 5s rolled |
| Sixes | Sum of 6s rolled |
| 3 of a Kind | Total of all 5 dice |
| 4 of a Kind | Total of all 5 dice |
| Full House | 25 points |
| Small Straight | 30 points |
| Large Straight | 40 points |
| Yahtzee (5 of a Kind) | 50 points |
| Chance | Total of all 5 dice |