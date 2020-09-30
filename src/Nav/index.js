import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export class Nav extends Component {
  componentDidMount() {
    //this.props.fetchShopItems()
  }

  render() {
    const disable = false
    console.log(window.location.pathname)
    return (
      <div className="nav-main-container">
        <div className="nav-left-sections">
          <div
            className="salad-days-image-section"
            type="button"
            onClick={() => this.props.history.push('/')}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0450/7985/5254/products/BankStatement_1024x1024@2x.png?v=1598351459"
              className="salad-days-logo"
            />
          </div>
          <div
            className="salad-days-sections"
            type="button"
            onClick={() => this.props.history.push('/shop')}
          >
            <p className="section-text">SHOP A GIFT</p>
          </div>
          {disable && (
            <div
              className="salad-days-sections"
              type="button"
              onClick={() => this.props.history.push('/buildBox')}
            >
              <p className="section-text">BUILD A BOX</p>
            </div>
          )}
          <div
            className="salad-days-sections"
            type="button"
            onClick={() => this.props.history.push('/corporateGifting')}
          >
            <p className="section-text">CORPORATE GIFTING</p>
          </div>
        </div>
        <div className="nav-right-sections">
          <div
            className="salad-days-cart-section"
            type="button"
            onClick={() => this.props.history.push('/cart')}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0445/1313/2702/files/cart-01.png?v=1601411687"
              className="cart-logo"
            />
            <p className="section-text">CART </p>
            {this.props.cart.cartPrice !== 0 && (
              <p className="section-price">(Rs. {this.props.cart.cartPrice})</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {}
)(Nav)
