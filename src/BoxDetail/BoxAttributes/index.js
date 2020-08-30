import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import BoxMessage from '../BoxMessage'

class BoxAttributes extends Component {
  render() {
    return (
      <div className="box-attributes-main-container">
        <div className="quantity-field-container">
          <div className="quantity-title">QUANTITY</div>
          <div className="quantity-button-field">1</div>
        </div>
        <div className="box-selection-container">
          <div className="box-selection-title">BOX COLOR</div>
        </div>
        {this.props.cardSelected === '' ? (
          <div
            className="pick-card-container"
            type="button"
            onClick={(e) => {
              e.preventDefault()
              this.props.openCardModal()
            }}
          >
            <div className="pick-card-title">Pick a card</div>
          </div>
        ) : (
          <div
            className="pick-card-container-selected"
            type="button"
            onClick={(e) => {
              e.preventDefault()
              this.props.openCardModal()
            }}
          >
            <img src={this.props.cardImage} className="selected-card-image" />
            <div className="selected-card-title-change-text">
              <div className="selected-card-title">
                {this.props.cardSelected}
              </div>
              <div className="selected-card-change">(change card)</div>
            </div>
          </div>
        )}
        <div className="cart-button-container">
          <div className="cart-button-title"> Add to Cart . Rs 1000</div>
        </div>
      </div>
    )
  }
}

export default BoxAttributes
