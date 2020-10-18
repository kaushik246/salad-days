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
    return (
      <div className="shop-main-container">
        <div className="shop-header-container">Ready to Ship</div>
        <div className="shop-items-container">
          {this.props.shop.shopItems &&
            this.props.shop.shopItems.map((item) => (
              <ShopItem item={item} history={this.props.history} />
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
