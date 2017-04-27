import { observable } from 'mobx'

class GameState {
  @observable turnsLeft = 5
}

const gamestate = new GameState()

export default gamestate
