import React, { Component } from 'react'
import TopBar from './TopBar'
import GameSquare from './GameSquare'
import Counter from './Counter'
import { observer } from 'mobx-react'
import { getGame } from '../stores/api'
import gamestate from '../stores/game'
import { NavLink } from 'react-router-dom'

@observer
class Game extends Component {
  componentDidMount () {
    getGame(this.props.match.params.id)
    .then(data => {
      gamestate.game = data
    })
  }

  render () {
    const board = gamestate.game.board.map((_, i) => {
      return gamestate.game.board[i].map((_, j) => {
        return <GameSquare row={i} col={j} content={gamestate.game.board[i][j]} id={this.props.match.params.id} />
      })
    })
    return <div>
      <div className='Game'>
        <TopBar />
        <div className='gameBoard'>
          {board}
        </div>
      </div>
      <div className='bottomLinks'>
        <NavLink to='/'>
            Go home
          </NavLink>
        <Counter />
      </div>
    </div>
  }
}

export default Game
