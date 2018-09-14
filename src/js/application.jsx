import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './Application.styl'
import '../css/type.styl'

const Navigation = () => (
  <nav className='navigation'>
    <Link to='/'>Home</Link>
    <Link to='/sheet'>Sheet</Link>
    <Link to='/about'>About</Link>
  </nav>
)

const Home = () => (  
  <div className='application'>
    <Navigation />

    <h1 className='type-title'>Dungeons and Dragons 5e - Power Character Sheet</h1>
    <p className='type-body'>Lorem ipsum dolor sit amen</p>
    <p className='type-written'>Get in the game bro</p>
    <p className='type-epic'>Roll a <strong>D20</strong></p>
    <Link to='/about'>About</Link>
  </div>
)

const About = () => (
  <div className='about'>
    <Navigation />

    <h1 className='type-title'>About</h1>
    <p className='type-body'>I got tired of annoying character sheets. This one is better. :)</p>
  </div>
)

import A from './containers/CharacterSheet'

const Sheet = _ => (
  <div className='sheet'>
    <Navigation />

    <h1 className='type-title'>Character Sheet</h1>
    <A />
  </div>
)

class Application extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Sheet} />
          <Route exact path='/about' component={About} />
          <Route exact path='/sheet' component={Sheet} />
        </Switch>
      </Router>
    )
  }
}

export default Application