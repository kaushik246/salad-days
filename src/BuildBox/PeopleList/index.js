import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ContentTable } from './../Table'

import { getPeopleList } from './actions'

const mapStateToProps = (state) => {
  return {
    people: state.peopleList.people
  }
}

class PeopleList extends Component {
  static defaultProps = {
    name: 'Star Wars Characters'
  }

  state = {
    search: ''
  }

  filterTable = (search, data) => {
    if (!data) return undefined
    if (!search) return data

    const terms = search.toLowerCase().split(' ')

    return terms.reduce((filtered, term) => {
      return filtered.filter((name) => {
        return name.name && name.name.toLowerCase().includes(term)
      })
    }, data)
  }

  searchChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  clearSearch = (key) => {
    this.setState({
      search: ''
    })
  }

  componentDidMount() {
    this.props.getPeopleList()
  }

  render() {
    return (
      <div className="bp3-card">
        <span className="header">{this.props.name}</span>
        <input
          className="table-search-bar"
          name="search"
          type="search"
          placeholder="Search"
          onChange={this.searchChanged}
        />
        <ContentTable
          data={this.filterTable(this.state.search, this.props.people)}
          type="people"
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { getPeopleList }
)(PeopleList)
