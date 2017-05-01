import React, { Component } from 'react'
import { observer } from 'mobx-react'
import gamestate from '../stores/game'
import { check, flag } from '../stores/api'
import { withRouter } from 'react-router-dom'

@observer
class GameSquare extends Component {
  _click = e => {
    if (gamestate.turnsLeft > 0) {
      gamestate.turnsLeft--
    }
    check(this.props.id, this.props.row, this.props.col)
    .then(data => {
      if (gamestate.game.state === 'lost') {
        gamestate.losses++
        this.props.history.push('/lost')
      } else if (gamestate.game.state === 'won') {
        gamestate.wins++
        this.props.history.push('/won')
      }
      gamestate.game = data
    })
  }

  _rgtClick = e => {
    e.preventDefault()
    if (gamestate.game.mines > 0) {
      flag(this.props.id, this.props.row, this.props.col)
      .then(data => {
        gamestate.game = data
      })
    }
  }

  render () {
    return <div className='GameSquare'
      style={{gridRow: `${this.props.row + 1}`, gridCol: `${this.props.col + 1}fr`}}
      onClick={this._click}
      onContextMenu={this._rgtClick}>
      {this.props.content}
    </div>
  }
}
export default withRouter(GameSquare)
