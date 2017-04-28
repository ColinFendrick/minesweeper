import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class MineCounter extends Component {
  render () {
    return <div className='MineCounter'>
      {('000' + '9').substr(-3)}
    </div>
  }
}

export default MineCounter
