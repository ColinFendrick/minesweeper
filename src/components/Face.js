import React from 'react'
import { newGame } from '../stores/api'
import { observer } from 'mobx-react'
import gamestate from '../stores/game'

const Face = ({ diff }) => {
  const _click = () => {
    newGame(diff)
    .then(data => {
      gamestate.game = data
      window.location = `/game/${data.id}`
    })
  }

  return <div className='Face' onClick={_click}>
    Reset
  </div>
}

export default observer(Face)
