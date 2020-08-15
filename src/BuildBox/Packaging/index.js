import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../generic/Header'
import { addToBox } from '../Items/actions'
import { setCurrentStep } from './../../Stepper/actions'

import './styles.scss'
import './responsive.css'

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
          {this.props.items.boxesList.map((box) => {
            return (
              <div
                className="selected-box-container"
                onClick={() => {
                  this.props.addToBox(box)
                  this.props.setCurrentStep(1)
                }}
              >
                <div
                  className="selected-box-image"
                  style={{
                    background: `url(${box.image})`
                  }}
                ></div>
                <div className="selected-box-name">{box.title}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(
  mapStateToProps,
  {
    addToBox,
    setCurrentStep
  }
)(Packaging)
