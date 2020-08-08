import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ContentTable } from './../Table'

import { getPeopleList } from './actions'

const mapStateToProps = (state) => {
  return {
    people: state.peopleList.people
  }
}

class Step1Component extends Component {
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
      <div className="build-a-box-step-1-component">
        <div className="step-component-title primary--title">STEP 1 OF 3</div>
        <div className="step-component-title secondary--title">CHOOSE YOUR BOX COLOR</div>
        <div className="step-component-description">Welcome to the easiest way to send someone a custom gift, in 3 simple steps. Add to cart and repeat for multiple boxes, or update your quantity in the cart.</div>
        <div className="step-1-box-selection-wrapper">
          <div className="selected-box-container">
            <div className="selected-box-image white-box" style={{background:"https://cdn.shopify.com/s/files/1/0558/2845/files/black_box.jpg?v=1589316612"}}></div>
            <div className="selected-box-name">WHITE BOX</div>
          </div>
          <div className="selected-box-container">
            <div className="selected-box-image black-box" style={{background:"https://cdn.shopify.com/s/files/1/0558/2845/files/black_box.jpg?v=1589316612"}}></div>
            <div className="selected-box-name">BLACK BOX</div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { getPeopleList }
)(Step1Component)
