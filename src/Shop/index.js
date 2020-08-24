import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import ShopItem from './ShopItem'
import { fetchShopItems } from './actions'

const mapStateToProps = (state) => {
  return {
    shop: state.shop
  }
}

export class Shop extends Component {
  componentDidMount() {
    this.props.fetchShopItems()
  }
  render() {
    console.log(this.props.history)
    return (
      <div className="shop-main-container">
        <div className="shop-header-container">Products</div>
        <div className="shop-items-container">
          {this.props.shop.shopItems.map((item) => (
            <ShopItem
              quantity={item.quantity}
              image={item.image}
              price={item.price}
              title={item.title}
              history={this.props.history}
            />
          ))}
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
