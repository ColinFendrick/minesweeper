import { observable } from 'mobx'

class GameState {
  @observable turnsLeft = 5
  @observable wins = 0
  @observable losses = 0
  @observable game = {
    board: [],
    mines: 0
  }
}

const gamestate = new GameState()

window.gamestate = gamestate

export default gamestate
