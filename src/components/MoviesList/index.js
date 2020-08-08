import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ContentTable } from './../Table'

import { getMoviesList, addMovie } from './actions'

const mapStateToProps = (state) => {
  return {
    movies: state.moviesList.movies,
    newMovie: state.moviesList.newMovie
  }
}

class MoviesList extends Component {
  static defaultProps = {
    name: 'Star Wars Movies'
  }

  componentDidMount() {
    this.props.getMoviesList()
  }
  render() {
    return (
      <div className="bp3-card">
        <span className="header">{this.props.name}</span>
        <input
          ref={(node) => {
            this.input = node
          }}
          placeholder="enter movie name..."
        />
        <button
          onClick={() => {
            this.props.dispatch(this.props.addMovie(this.input.value))
          }}
        >
          Add Movie Name
        </button>

        <ContentTable data={this.props.movies} type="movies" />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { getMoviesList, addMovie }
)(MoviesList)
