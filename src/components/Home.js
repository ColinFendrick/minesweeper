import React, { Component } from 'react'
import DiffButton from './DiffButton'

class Home extends Component {
  render () {
    return <div className='Home'>
      Select your difficulty
      <div className='diffButtons'>
        <DiffButton diff='0' />
        <DiffButton diff='1' />
        <DiffButton diff='2' />
      </div>
    </div>
  }
}

export default Home
