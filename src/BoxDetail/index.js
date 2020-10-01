import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

import ImageSlider from './ImageSlider'
import BoxInfo from './BoxInfo'
import BoxAttributes from './BoxAttributes'
import CardModal from './CardModal'

import {
  openCardModal,
  closeCardModal,
  setCard,
  setBox,
  clearBox
} from './actions'
import { fetchCardList } from './../BuildBox/Card/actions'
import {
  fetchShopItemData,
  unsetShopItemData,
  addItemToCart
} from './../Shop/actions'

import _ from 'lodash'

const mapStateToProps = (state) => {
  return {
    boxDetail: state.boxDetail,
    card: state.card,
    items: state.items,
    shopItem: state.shop.shopItem,
    shop: state.shop,
    cart: state.cart
  }
}

class BoxDetail extends Component {
  componentDidMount() {
    this.props.fetchShopItemData(this.props.match.params.id)
    this.props.fetchCardList()
    this.state = {
      shopItem: this.props.shopItem
    }
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(prevProps.shopItem, this.props.shopItem)) {
      this.setState({
        shopItem: this.props.shopItem
      })
    }
  }

  componentWillUnmount() {
    this.props.unsetShopItemData()
  }
  render() {
    return this.props.shopItem ? (
      <div className="box-detail-main-container">
        <div className="box-detail-slider-info">
          <div className="box-detail-slider">
            <div className="box-name">{this.props.shopItem.title}</div>
            <div className="box-price">
              Rs. {this.props.shopItem.variants[0].price}
            </div>
            <BoxInfo description={this.props.shopItem.description} />
            <ImageSlider images={this.props.shopItem.images} />
          </div>
          <div className="box-detail-info">
            <BoxAttributes
              cardSelected={this.props.boxDetail.cardSelected}
              cardImage={this.props.boxDetail.cardImage}
              boxSelected={this.props.boxSelected}
              boxImage={this.props.boxImage}
              openCardModal={this.props.openCardModal}
              closeCardModal={this.props.closeCardModal}
              boxesList={this.props.items.boxesList}
              history={this.props.history}
              addItemToCart={this.props.addItemToCart}
              checkoutId={this.props.cart.checkoutId}
              variantId={this.props.shopItem.variants[0].id}
              clearBox={this.props.clearBox}
            />
          </div>
        </div>
        <CardModal
          cardsList={this.props.card.cardsList}
          cards={this.props.shop.cards}
          cardModal={this.props.boxDetail.cardModal}
          closeCardModal={this.props.closeCardModal}
          setCard={this.props.setCard}
        />
      </div>
    ) : (
      <div className="loading-icon">
        <img src="https://cdn.shopify.com/s/files/1/0450/7985/5254/products/SD_Graphic_1_1024x1024@2x.gif?v=1598351459" />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {
    openCardModal,
    closeCardModal,
    setCard,
    fetchCardList,
    setBox,
    clearBox,
    fetchShopItemData,
    unsetShopItemData,
    addItemToCart
  }
)(BoxDetail)
