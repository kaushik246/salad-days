import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import './responsive.css'
import ImageSlider from './ImageSlider'
import BoxInfo from './BoxInfo'
import BoxAttributes from './BoxAttributes'
import CardModal from './CardModal'
import InfoModal from './../BuildBox/Items/components/SelectedItems/components/InfoModal'

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

import { requestAddLineItem } from './../Cart/actions'

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
  state = {
    shopItem: this.props.shopItem,
    seconds: 3,
    infoModal: false
  }
  componentDidMount() {
    this.props.fetchShopItemData(this.props.match.params.id)
    this.props.fetchCardList()

    this.myInterval = setInterval(() => {
      const { seconds } = this.state
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
    }, 1000)
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(prevProps.shopItem, this.props.shopItem)) {
      this.setState({
        shopItem: this.props.shopItem
      })
    }
  }

  openInfoModal = () => {
    this.setState({
      infoModal: true,
      title: 'Please select a card!',
      info: 'You must select a card before adding this box to your cart.'
    })
  }

  closeInfoModal = () => {
    this.setState({
      infoModal: false,
      title: '',
      info: ''
    })
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
              addLineItemInProgress={this.props.cart.addLineItemInProgress}
              requestAddLineItem={this.props.requestAddLineItem}
              price={this.props.shopItem.variants[0].price}
              openInfoModal={this.openInfoModal}
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
        <InfoModal
          openInfoModal={this.openInfoModal}
          closeInfoModal={this.closeInfoModal}
          infoModal={this.state.infoModal}
          info={this.state.info}
          title={this.state.title}
        />
      </div>
    ) : (
      <div className="loading-icon">
        <img src="https://cdn.shopify.com/s/files/1/0445/1313/2702/files/Spinner-1s-200px.gif?v=1601548805" />
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
    addItemToCart,
    requestAddLineItem
  }
)(BoxDetail)
