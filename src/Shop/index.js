import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import ShopItem from './ShopItem'
import { fetchShopItems } from './actions'

const mapStateToProps = (state) => {
  return {
    cart: state.shop
  }
}

export class Shop extends Component {
  componentDidMount() {
    this.props.fetchShopItems()
  }
  render() {
    return (
      <div className="shop-main-container">
        <div className="shop-header-container">Products</div>
        <div className="shop-items-container">
          {
            <ShopItem
              quantity={1}
              image="https://cdn.shopify.com/s/files/1/0450/1913/6168/products/Product_1_1024x1024@2x.jpg?v=1597324651"
              price={100}
              title="Shop Item 1"
            />
          }
          <ShopItem
            quantity={0}
            image="https://cdn.shopify.com/s/files/1/0450/1913/6168/products/Product_1_1024x1024@2x.jpg?v=1597324651"
            price={110}
            title="Shop Item 2"
          />
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {
    fetchShopItems
  }
)(Shop)
