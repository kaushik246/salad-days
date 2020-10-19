import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import './responsive.css'

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    nav: state.nav
  }
}

export class Nav extends Component {
  componentDidMount() {
    //this.props.fetchShopItems()
  }

  render() {
    const disable = false
    return (
      <div className="nav-main-container">
        <div className="nav-main-wrap">
          <div className="nav-left-sections">
            <div
              className="salad-days-image-section"
              type="button"
              onClick={() => this.props.history.push('/')}
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0445/1313/2702/files/logo-01.png?v=1601708076"
                className="salad-days-logo"
              />
            </div>
            <div
              className="salad-days-sections desktop"
              type="button"
              onClick={() => this.props.history.push('/shop')}
            >
              <p 
                className={`section-text ${this.props.nav.page === 'shop' ? 'highlight' : ''}`}
                key="shop"
              >
                SHOP A GIFT
              </p>
            </div>
            {disable && (
              <div
                className="salad-days-sections desktop"
                type="button"
                onClick={() => this.props.history.push('/buildBox')}
              >
                <p className="section-text">BUILD A BOX</p>
              </div>
            )}
            <div
              className="salad-days-sections desktop"
              type="button"
              onClick={() => this.props.history.push('/corporateGifting')}
            >
              <p className={`section-text ${this.props.nav.page === 'corporateGifting' ? 'highlight' : ''}`} key="corporate">CORPORATE GIFTING</p>
            </div>
          </div>
          <div className="nav-right-sections desktop">
            <div
              className="salad-days-cart-section"
              type="button"
              onClick={() => this.props.history.push('/cart')}
            >
              <div className="cart-icon-container">
                <img
                  src="https://cdn.shopify.com/s/files/1/0445/1313/2702/files/cart.png?v=1601745553"
                  className="cart-icon"
                />
                {this.props.cart.checkout &&
                  this.props.cart.checkout.lineItems.length && (
                    <div className="cart-count">
                      {this.props.cart.checkout.lineItems.length}
                    </div>
                  )}
              </div>
              {this.props.cart.checkout &&
                this.props.cart.checkout.totalPrice !== '0.00' && (
                  <p className="section-price">
                    (Rs. {this.props.cart.checkout.totalPrice})
                  </p>
                )}
            </div>
          </div>
        </div>
        <div className="nav-wrap mobile">
          <div className="nav-wrap-mobile-container">
            <div
              className="salad-days-sections mobile"
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
              className="salad-days-sections mobile"
              type="button"
              onClick={() => this.props.history.push('/corporateGifting')}
            >
              <p className="section-text">CORPORATE GIFTING</p>
            </div>
            <div
              className="salad-days-cart-section mobile"
              type="button"
              onClick={() => this.props.history.push('/cart')}
            >
              <div className="cart-icon-container">
                <img
                  src="https://cdn.shopify.com/s/files/1/0445/1313/2702/files/cart.png?v=1601745553"
                  className="cart-icon"
                />
                {this.props.cart.checkout &&
                  this.props.cart.checkout.lineItems.length !== 0 && (
                    <div className="cart-count">
                      <p className="cart-count-text">
                        {this.props.cart.checkout.lineItems.length}
                      </p>
                    </div>
                  )}
              </div>
              {this.props.cart.checkout &&
                this.props.cart.checkout.totalPrice !== '0.00' && (
                  <p className={`section-price ${this.props.nav.page === 'cart' ? 'highlight' : '' }`}>
                    (Rs. {this.props.cart.checkout.totalPrice})
                  </p>
                )}
            </div>
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
