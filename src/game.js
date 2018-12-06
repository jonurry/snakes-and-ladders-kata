export default class Game {
  constructor() {
    this.position = 1
  }
  move(spaces) {
    this.position += spaces
  }
}
