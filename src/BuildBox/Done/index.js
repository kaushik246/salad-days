import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../generic/Header'
import { setCurrentStep } from './../../Stepper/actions'
import { clearItems } from './../Items/actions'
import { clearCard } from './../Card/actions'

import './styles.scss'
import './responsive.css'

const mapStateToProps = (state) => {
  return {
    card: state.card,
    items: state.items,
  }
}

class Done extends Component {
  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds } = this.state
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }))
      }
    }, 1000)
  }

  state = {
    seconds: 2,
  }
  render() {
    return (
      <div className="done-selection-step">
        <Header
          step={4}
          secondaryTitle="BUILDING YOUR BOX"
          description="Please wait a moment while we prepare your custom gift box!"
        />
        <div className="cart-new-box-buttons">
          {this.state.seconds !== 0 ? (
            <img
              className="loading-icon"
              src="https://cdn.shopify.com/s/files/1/0450/7985/5254/products/SD_Graphic_1_1024x1024@2x.gif?v=1598351459"
            />
          ) : (
            <img
              className="loading-complete-icon"
              src="https://cdn.shopify.com/s/files/1/0450/7985/5254/products/Blue_Leaf_1024x1024@2x.png?v=1598450609"
            />
          )}
          {this.state.seconds === 0 && (
            <p
              className="cart-button"
              onClick={() => {
                this.props.clearCard()
                this.props.clearItems()
                this.props.history.push('/cart')
                this.props.setCurrentStep(0)
              }}
            >
              VIEW CART
            </p>
          )}
          {this.state.seconds === 0 && (
            <p
              className="new-box-button"
              onClick={() => {
                this.props.clearCard()
                this.props.clearItems()
                this.props.setCurrentStep(0)
              }}
            >
              BUILD ANOTHER BOX
            </p>
          )}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  setCurrentStep,
  clearCard,
  clearItems,
})(Done)
