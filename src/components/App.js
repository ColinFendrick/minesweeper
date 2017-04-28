import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Game from './Game'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <Route path='/:id' component={Game} />
      </div>
    </Router>
  }
}

export default App
