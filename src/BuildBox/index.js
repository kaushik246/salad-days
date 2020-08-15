import React, { Component } from 'react'
import './styles.scss'
import Items from './Items'
import Packaging from './Packaging'
import Card from './Card'

export class BuildBox extends Component {
  render() {
    return (
      <div className="build-box-container">
        {this.props.stepper.currentStep === 0 && (
          <div className="build-box-packaging">
            <Packaging items={this.props.items} />
          </div>
        )}
        {this.props.stepper.currentStep === 1 && (
          <div className="build-box-ietms">
            <Items items={this.props.items} />
          </div>
        )}
        {this.props.stepper.currentStep === 2 && (
          <div className="build-box-card">
            <Card card={this.props.card} />
          </div>
        )}
      </div>
    )
  }
}

export default BuildBox
