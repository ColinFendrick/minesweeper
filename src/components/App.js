import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Game from './Game'
import Home from './Home'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <Route exact path='/' component={Home} />
        <Route path='/game/:id' component={Game} />
      </div>
    </Router>
  }
}

export default App
