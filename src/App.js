import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import Items from './components/Items'
import Packaging from './components/Packaging'

export class App extends Component {
  render() {
    return (
      <div>
        <Packaging/>
        <Items/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.app.user
  }
}

export default connect(mapStateToProps)(App)
