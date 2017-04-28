import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Game from './Game'
import Home from './Home'
import Won from './Won'
import Lost from './Lost'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <Route exact path='/' component={Home} />
        <Route path='/game/:id' component={Game} />
        <Route exact path='/won' component={Won} />
        <Route exact path='/lost' component={Lost} />
      </div>
    </Router>
  }
}

export default App
