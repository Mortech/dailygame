# Reverse Scrabble

## Gameplay

The gameplay goes like this: Start with a completed board, from an actual pro scrabble game. The player will then choose letters to pull off the board, and if those letters form a valid scrabble play, then either the points column for player A or B (in the actual scrabble game) will be credited those points, alternating every turn until all letters have been removed.

Alternatively, all the points could go into a singular score pile, which would make the game easier to understand and play. This might make for a good "easy mode".

### Game Modes

There are 3 game modes I have in mind for this:
1. Blitz. Just pull letters off the board, trying to make any valid plays you can without worrying about points. This is a timed mode, with lower time being better.
2. Maximum score. Try to pull letters off the board to maximize the score of one of the players (ie pull off 7-letter bingos with one player, but only single-letter plays for the other)
3. Matching score. Try to match the scores that the players actually had in the game as closely as possible. This may require picking and choosing boards that work for this, since in real scrabble turns can be lost by exchanging tiles. If one player made a move twice in a row, that would mess up the flow of the game.

## Daily Aspects

As a daily game, the board played on should change every day to a different one. Ideally these would be pulled from a database of scrabble games, perhaps we could store a tiny mongodb with the games to use each day and update that periodically. Also, like how Wordle tracks your number of guesses used each day, some performance stats can be tracked for how well the player has done, a cookie should suffice for this.

## Dev notes

There is a scrabble solver written in js that we can yoink most of the code from: https://github.com/kamilmielnik/scrabble-solver 
