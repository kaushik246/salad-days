import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

const mapStateToProps = (state) => {
  return {}
}

class Header extends Component {
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

  componentDidMount() {}

  render() {
    return (
      <div className="step-component-header">
        <div className="step-component-title primary--title">STEP 1 OF 3</div>
        <div className="step-component-title secondary--title">
          CHOOSE YOUR BOX COLOR
        </div>
        <div className="step-component-description">
          Welcome to the easiest way to send someone a custom gift, in 3 simple
          steps. Add to cart and repeat for multiple boxes, or update your
          quantity in the cart.
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Header)
