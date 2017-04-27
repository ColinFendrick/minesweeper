import React from 'react'
import { observer } from 'mobx-react'
import gamestate from '../stores/game.js'

const MoveCounter = () => (
  <div className='MoveCounter'>
    {('000' + gamestate.turnsLeft).substr(-3)}
  </div>
)

export default observer(MoveCounter)
