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
    const titles = ['easy', 'medium', 'hard']
    return <button className='DiffButton' onClick={this._click}>
      {titles[this.props.diff]}
    </button>
  }
}

export default DiffButton
