import React, { Component } from 'react'
import './styles.scss'
import './responsive.css'

export class CartItem extends Component {
  render() {
    return (
      <div className="cart-item-container">
        <div className="cart-item-image-contents">
          <div className="item-image">
            <img className="box-item-image" src={this.props.item.image} />
          </div>
          <div className="cart-item-contents">
            <div className="item-title-container">
              <div className="item-title">BUILD A FOXBOX</div>
              <div className="item-title-subtext">Original Creme/Small</div>
            </div>

            <div className="item-card">
              <b>Card: </b>Card: Happy Birthday
            </div>
            <div className="item-contents">
              <b>Gift Box Contents: </b> 1 x Gold Corkscrew, Gift Box Contents:
              1 x Gold Corkscrew, Gift Box Contents: 1 x Gold Corkscrew, Gift
              Box Contents: 1 x Gold Corkscrew, Gift Box Contents: 1 x Gold
              Corkscrew, Gift Box Contents: 1 x Gold Corkscrew, Gift Box
              Contents: 1 x Gold Corkscrew, Gift Box Contents: 1 x Gold
              Corkscrew
            </div>
            <div
              className="item-remove"
              type="button"
              onClick={() => console.log('Hello')}
            >
              Remove
            </div>
          </div>
        </div>
        <div className="cart-item-price">100</div>
        <div className="cart-item-quantity">1</div>
        <div className="cart-item-subtotal">1000</div>
      </div>
    )
  }
}

export default CartItem
