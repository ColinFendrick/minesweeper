import React from 'react'
import { observer } from 'mobx-react'
import gamestate from '../stores/game.js'

const _click = e => {
  gamestate.turnsLeft = gamestate.turnsLeft - 1
  console.log(e.button)
  console.log(this.props.row)
}

const GameSquare = () => (
  <div className='GameSquare' onClick={_click} style={{gridRow: '1', gridColumn: '1'}}>
    1
  </div>
)

export default observer(GameSquare)
