import React from 'react'
import { observer } from 'mobx-react'
// import { newGame, getGame } from '../stores/api.js'
import gamestate from '../stores/game.js'

const _click = () => {
  gamestate.turnsLeft = gamestate.turnsLeft - 1
}

const GameSquare = () => (
  <div className='GameSquare' onClick={_click}>
    1
  </div>
)

export default observer(GameSquare)
