import React, { Component } from 'react'
import TopBar from './TopBar'
import GameSquare from './GameSquare'
import { observer } from 'mobx-react'

@observer
class Game extends Component {
  render () {
    return <div className='Game'>
      <TopBar />
      <div className='gameBoard'>
        <GameSquare position={this.position} />
        <GameSquare position='1-2' />
      </div>
    </div>
  }
}

export default Game
