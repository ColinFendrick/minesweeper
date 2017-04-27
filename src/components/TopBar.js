import React from 'react'
import MoveCounter from './MoveCounter'
import Face from './Face'
import MineCounter from './MineCounter'

const TopBar = () => (
  <div className='TopBar'>
    <MineCounter />
    <Face />
    <MoveCounter />
  </div>
)

export default TopBar
