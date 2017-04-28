import React from 'react'
import MoveCounter from './MoveCounter'
import Face from './Face'
import MineCounter from './MineCounter'
import { observer } from 'mobx-react'
import gamestate from '../stores/game'

const TopBar = () => (
  <div className='TopBar'>
    <MineCounter />
    <Face diff={gamestate.game.difficulty} />
    <MoveCounter />
  </div>
)

export default observer(TopBar)
