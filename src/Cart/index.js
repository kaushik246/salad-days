import React, { Component } from 'react'
import './styles.scss'

import CartHeader from './CartHeader'
import CartItem from './CartItem'

export class Cart extends Component {
  render() {
    return (
      <div className="cart-main-container">
        <CartHeader />
        {true &&
          this.props.cart.cartItems.map((item) => <CartItem item={item} />)}

        <div className="cart-footer-container">
          <div className="cart-checkout-subtotal-container">
            <div className="cart-subtotal">SUBTOTAL: 1000</div>
            <div className="cart-checkout-container" onClick={() => {}}>
              CHECK OUT
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cart
