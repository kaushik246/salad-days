import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import './styles.scss'


import Items from './components/Items'


const mapStateToProps = (state) => {
  return {
    user: state.app.user
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <Items/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
