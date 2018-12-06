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
    let random
    beforeEach(() => {
      random = jest.spyOn(Math, 'random')
      game = new Game()
    })

    afterEach(() => {
      random.mockRestore()
    })

    test('It should randomise dice rolls', () => {
      game.rollDie()
      expect(Math.random).toHaveBeenCalled()
    })

    test('It should roll a minimum value of 1', () => {
      random.mockImplementation(() => 0) // roll a 1
      game.rollDie()
      expect(game.position).toEqual(2)
    })

    test('It should roll a maximum value of 6', () => {
      random.mockImplementation(() => 0.99999999) // Roll a 6
      game.rollDie()
      expect(game.position).toEqual(7)
    })

    test('It should move the number of spaces indicated on the die', () => {
      // Given the player rolls a 4
      // When they move their token
      // Then the token should move 4 spaces
      random.mockImplementation(() => 0.5) // roll a 4
      game.rollDie()
      expect(game.position).toEqual(5)
    })
  })
})
