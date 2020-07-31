import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import './styles.scss'

import MoviesList from './components/MoviesList'
import PeopleList from './components/PeopleList'

const mapStateToProps = (state) => {
  return {
    user: state.app.user
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <p className="header main-title">Welcome to Stars Wars Fan Page</p>
        <PeopleList dispatch={this.props.dispatch} />
        <MoviesList dispatch={this.props.dispatch} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
