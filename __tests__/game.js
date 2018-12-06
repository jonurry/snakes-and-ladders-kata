import Game from '../src/game'

describe('Game', () => {
  let game

  beforeEach(() => {
    game = new Game()
  })

  describe('Token can move across the board', () => {
    test('Token starts on square 1', () => {
      expect(game.position).toEqual(1)
    })

    test('Token can move 3 squares', () => {
      game.move(3)
      expect(game.position).toEqual(4)
    })

    test('Token moves are incremental', () => {
      game.move(3)
      game.move(4)
      expect(game.position).toEqual(8)
    })
  })

  describe('Moves are determined by dice rolls', () => {
    let random

    beforeEach(() => {
      random = jest.spyOn(Math, 'random')
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
      random.mockImplementation(() => 0.5) // roll a 4
      game.rollDie()
      expect(game.position).toEqual(5)
    })
  })

  describe('Player can win the game', () => {
    describe('Game is won when token lands on 100', () => {
      beforeEach(() => {
        game.position = 97
        game.move(3)
      })

      test('Token lands on 100', () => {
        expect(game.position).toEqual(100)
      })

      test('Game is won', () => {
        expect(game.isWon()).toEqual(true)
      })
    })

    describe('Game is not over if token overshoots 100', () => {
      beforeEach(() => {
        game.position = 97
        game.move(4)
      })

      test('Token overshoots 100, roll is forfeit', () => {
        expect(game.position).toEqual(97)
      })

      test('Game is not won', () => {
        expect(game.isWon()).toEqual(false)
      })
    })
  })
})
