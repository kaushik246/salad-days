import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import Stepper from './../Stepper'
import Items from './Items'
import Packaging from './Packaging'
import Card from './Card'
import Done from './Done'
import { setCurrentStep } from './../Stepper/actions';


const mapStateToProps = (state) => {
  return {
    user: state.app.user,
    items: state.items,
    card: state.card,
    cart: state.cart,
    stepper: state.stepper,
  }
}

export class BuildBox extends Component {
  render() {
    return (
      <div className="build-box-container">
        <Stepper
          steps={[
            { title: 'STEP 1', subTitle: 'Packaging' },
            { title: 'STEP 2', subTitle: 'Items' },
            { title: 'STEP 3', subTitle: 'Card' },
            { title: 'STEP 4', subTitle: 'Done!' }
          ]}
          activeStep={this.props.stepper.currentStep}
        />
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
        {this.props.stepper.currentStep === 3 && (
          <div className="build-box-card">
            <Done />
          </div>
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, { setCurrentStep }) (BuildBox);
