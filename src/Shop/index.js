import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import ShopItem from './ShopItem'
import { fetchShopItems } from './actions'
import { setNavPage } from './../Nav/actions'

const mapStateToProps = (state) => {
  return {
    shop: state.shop
  }
}

export class Shop extends Component {
  componentDidMount() {
    this.props.fetchShopItems()
    this.props.setNavPage('shop')
  }
  render() {
    return (
      <div className="shop-main-container">
        <div className="shop-header-container">Ready to Ship</div>
        <div className="shop-items-container">
          {this.props.shop.shopItems &&
            this.props.shop.shopItems.map((item) => (
              <ShopItem item={item} history={this.props.history} key={`${item.id}`}/>
            ))}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {
    fetchShopItems,
    setNavPage
  }
)(Shop)
