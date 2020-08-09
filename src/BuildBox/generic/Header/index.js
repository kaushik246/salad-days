import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

const mapStateToProps = (state) => {
  return {}
}

class Header extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="step-component-header">
        <div className="step-component-title primary--title">
          STEP {this.props.step} OF 3
        </div>
        <div className="step-component-title secondary--title">
          {this.props.secondaryTitle}
        </div>
        <div className="step-component-description">
          {this.props.description}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Header)
