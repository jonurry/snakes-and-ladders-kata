// Token Can Move Across the Board
//
// As a player
// I want to be able to move my token
// So that I can get closer to the goal

import Game from '../src/game'

describe('Game', () => {
  describe('Token can move across the board', () => {
    let game
    beforeEach(() => {
      game = new Game()
    })

    test('Token starts on square 1', () => {
      // Given the game is started
      // When the token is placed on the board
      // Then the token is on square 1
      expect(game.position).toEqual(1)
    })

    test('Token can move 3 squares', () => {
      // Given the token is on square 1
      // When the token is moved 3 spaces
      // Then the token is on square 4
      game.move(3)
      expect(game.position).toEqual(4)
    })

    test('Token moves are incremental', () => {
      // Given the token is on square 1
      // When the token is moved 3 spaces
      // And then it is moved 4 spaces
      // Then the token is on square 8
      game.move(3)
      game.move(4)
      expect(game.position).toEqual(8)
    })
  })
})
