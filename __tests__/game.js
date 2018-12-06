import Game from '../src/game'

describe('Game', () => {
  describe('Token can move across the board', () => {
    // As a player
    // I want to be able to move my token
    // So that I can get closer to the goal
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

  describe('Moves Are Determined By Dice Rolls', () => {
    // As a player
    // I want to move my token based on the roll of a die
    // So that there is an element of chance in the game
    let game
    beforeEach(() => {
      game = new Game()
    })

    test('It should randomise dice rolls', () => {
      const random = jest.spyOn(Math, 'random')
      game.rollDie()
      expect(Math.random).toHaveBeenCalled()
      random.mockRestore()
    })
  })
})
