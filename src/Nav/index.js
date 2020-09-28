import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import './responsive.css'

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
                src="https://cdn.shopify.com/s/files/1/0450/7985/5254/products/BankStatement_1024x1024@2x.png?v=1598351459"
                className="salad-days-logo"
              />
            </div>
            <div
              className="salad-days-sections desktop"
              type="button"
              onClick={() => this.props.history.push('/shop')}
            >
              <p className="section-text">SHOP</p>
            </div>
            <div
              className="salad-days-sections desktop"
              type="button"
              onClick={() => this.props.history.push('/buildBox')}
            >
              <p className="section-text">BUILD A BOX</p>
            </div>
            <div
              className="salad-days-sections desktop"
              type="button"
              onClick={() => this.props.history.push('/corporateGifting')}
            >
              <p className="section-text">CORPORATE GIFTING</p>
            </div>
          </div>
          <div className="nav-right-sections desktop">
            <div
              className="salad-days-cart-section"
              type="button"
              onClick={() => this.props.history.push('/cart')}
            >
              <p className="section-text">CART </p>
              {this.props.cart.cartPrice !== 0 && (
                <p className="section-price">
                  (Rs. {this.props.cart.cartPrice})
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="nav-wrap mobile">
          <div
            className="salad-days-sections mobile"
            type="button"
            onClick={() => this.props.history.push('/shop')}
          >
            <p className="section-text">SHOP</p>
          </div>
          <div
            className="salad-days-sections mobile"
            type="button"
            onClick={() => this.props.history.push('/buildBox')}
          >
            <p className="section-text">BUILD A BOX</p>
          </div>
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
