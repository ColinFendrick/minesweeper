import React, { Component } from 'react'
import { newGame } from '../stores/api'
import gamestate from '../stores/game'

class DiffButton extends Component {
  _click = () => {
    newGame(this.props.diff)
    .then(data => {
      gamestate.game = data
      window.location = `/game/${data.id}`
    })
  }

  render () {
    return <button className='DiffButton' onClick={this._click}>
      {this.props.diff}
    </button>
  }
}

export default DiffButton
