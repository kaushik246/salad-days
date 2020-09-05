import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import BoxMessage from '../BoxMessage'

class BoxAttributes extends Component {
  state = {
    quantity: 1
  }

  render() {
    return (
      <div className="box-attributes-main-container">
        <div className="quantity-field-container">
          <div className="quantity-title">QUANTITY</div>
          <div className="quantity-button-field">
            <div className="shop-item-input-wrap">
              <div
                className="shop-item-increase-decrease"
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                -
              </div>
              <input type="text" disabled={true} placeholder="1"></input>
              <div
                className="shop-item-increase-decrease"
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                +
              </div>
            </div>
          </div>
        </div>
        <div className="box-selection-container">
          <div className="box-selection-title">BOX COLOR</div>
          <div className="box-image-selection">
            <div className="box-info box-selected">
              <img
                className="box-image"
                src="https://cdn.shopify.com/s/files/1/0450/7985/5254/products/mainboxbrown_1024x1024@2x.jpg?v=1598077337"
              />{' '}
              <div className="box-title">ORIGINAL CRAFT BOX</div>
            </div>
            <div className="box-info">
              <img
                className="box-image"
                src="https://cdn.shopify.com/s/files/1/0450/7985/5254/products/mainboxblue_1024x1024@2x.jpg?v=1598077337"
              />
              <div className="box-title">TIL BLUE BOX</div>
            </div>
          </div>
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
