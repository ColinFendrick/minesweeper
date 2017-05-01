import React, { Component } from 'react'
import { observer } from 'mobx-react'
import gamestate from '../stores/game'

@observer
class MineCounter extends Component {
  render () {
    return <div className='MineCounter'>
      {('000' + gamestate.game.mines).substr(-3)}
    </div>
  }
}

export default MineCounter
