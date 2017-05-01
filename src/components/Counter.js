import React from 'react'
import { observer } from 'mobx-react'
import gamestate from '../stores/game'

const Counter = () => (
  <div className='Counter'>
    <div className='wins'>
      wins: {gamestate.wins}
    </div>
    <div className='losses'>
      losses: {gamestate.losses}
    </div>
  </div>
)

export default observer(Counter)
