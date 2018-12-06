// Token Can Move Across the Board

// As a player
// I want to be able to move my token
// So that I can get closer to the goal

// Given the game is started
// When the token is placed on the board
// Then the token is on square 1

// Given the token is on square 1
// When the token is moved 3 spaces
// Then the token is on square 4

// Given the token is on square 1
// When the token is moved 3 spaces
// And then it is moved 4 spaces
// Then the token is on square 8

import Game from '../src/game.js'

describe('Game', () => {
  describe('Token can move across the board', () => {
    test('Token starts on square 1', () => {
      const game = new Game()
      expect(game.position).toEqual(1)
    })
  })
})
