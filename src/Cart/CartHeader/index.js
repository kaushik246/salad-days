import React, { Component } from 'react'
import './styles.scss'
import './responsive.css'

export class CartHeader extends Component {
  render() {
    return (
      <div className="cart-header-container">
        <h3 className="cart-title">Your Cart</h3>
        <div className="cart-column-headers desktop">
          <div className="cart-column-item">Item</div>
          <div className="cart-column">Price</div>
          <div className="cart-column">Quantity</div>
          <div className="cart-column">Total</div>
        </div>
      </div>
    )
  }
}

export default CartHeader
