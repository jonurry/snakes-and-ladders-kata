const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default class Game {
  constructor() {
    this.position = 1
  }
  move(spaces) {
    this.position += spaces
  }
  rollDie() {
    this.position += getRandomIntInclusive(1, 6)
  }
}
