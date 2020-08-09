import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../generic/Header'
import './styles.scss'

class Packaging extends Component {

  render() {
    return (
      <div className="build-a-box-step-1-component">
        <Header
          step={1}
          secondaryTitle="CHOOSE YOUR BOX COLOR"
          description="Welcome to the easiest way to send someone a custom gift, in 3 simple steps. Add to cart and repeat for multiple boxes, or update your quantity in the cart."
        />
        <div className="step-1-box-selection-wrapper">
          <div className="selected-box-container">
            <div
              className="selected-box-image white-box"
              style={{
                background:
                  'https://cdn.shopify.com/s/files/1/0558/2845/files/black_box.jpg?v=1589316612'
              }}
            ></div>
            <div className="selected-box-name">WHITE BOX</div>
          </div>
          <div className="selected-box-container">
            <div
              className="selected-box-image black-box"
              style={{
                background:
                  'https://cdn.shopify.com/s/files/1/0558/2845/files/black_box.jpg?v=1589316612'
              }}
            ></div>
            <div className="selected-box-name">BLACK BOX</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(Packaging)
