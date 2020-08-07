import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import './styles.scss'

import MoviesList from './components/MoviesList'
import PeopleList from './components/PeopleList'
import Step1Component from './components/Step1Component'

const mapStateToProps = (state) => {
  return {
    user: state.app.user
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        {/* <PeopleList dispatch={this.props.dispatch} /> */}
        {/* <MoviesList dispatch={this.props.dispatch} /> */}
        <Step1Component dispatch={this.props.dispatch} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
