import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import './responsive.css'

import CartHeader from './CartHeader'
import CartItem from './CartItem'

import { increaseQuantity, decreaseQuantity, removeItem } from './actions'

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export class Cart extends Component {
  render() {
    return (
      <div className="cart-main-container">
        <CartHeader />
        {Object.keys(this.props.cart.checkout.lineItems).map((cartId) => (
          <CartItem
            item={this.props.cart.cartItems[cartId]}
            cartId={cartId}
            increaseQuantity={this.props.increaseQuantity}
            decreaseQuantity={this.props.decreaseQuantity}
            removeItem={this.props.removeItem}
          />
        ))}
        <div className="cart-footer-container">
          <div className="cart-checkout-subtotal-container">
            <div className="cart-subtotal">
              <div className="subtotal-text">SUBTOTAL</div>
              <div className="subtotal-value">
                Rs. {this.props.cart.cartPrice}
              </div>
            </div>
            <div className="cart-checkout-container" onClick={() => {}}>
              CHECK OUT
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {
    increaseQuantity,
    decreaseQuantity,
    removeItem
  }
)(Cart)
