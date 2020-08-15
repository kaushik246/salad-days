import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../generic/Header'
import { setCurrentStep } from './../../Stepper/actions'

import './styles.scss'

const mapStateToProps = (state) => {
    return {

    }
}

class Done extends Component {
    componentDidMount() {
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
                    <p className="cart-button">
                        VIEW CART
                    </p>
                    <p className="new-box-button" onClick={() => this.props.setCurrentStep(0)}>
                        BUILD ANOTHER BOX
                    </p>
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    {
        setCurrentStep
    }
)(Done)
