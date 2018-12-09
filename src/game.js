const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default class Game {
  constructor() {
    this.position = 1
    this.won = false
  }

  isWon() {
    return this.won
  }

  move(spaces) {
    if (this.position + spaces <= 100) {
      this.position += spaces
    }
    this.won = this.position === 100
  }

  rollDie() {
    this.move(getRandomIntInclusive(1, 6))
  }
}
