import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import BuildBox from './BuildBox'

export class App extends Component {
  render() {
    return (
      <div>
        <BuildBox/>
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
