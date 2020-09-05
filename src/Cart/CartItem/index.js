import React, { Component } from 'react'
import './styles.scss'
import './responsive.css'

export class CartItem extends Component {
  cartItemsString = (items) => {
    console.log(items)
    let itemsString = ' '
    items.map((item) => {
      if (item.count !== 0) itemsString += ` ${item.count} x ${item.title},`
    })
    return itemsString
  }

  render() {
    return (
      <div className="cart-item-container">
        <div className="cart-item-image-contents">
          <div className="item-image">
            <img
              className="box-item-image"
              src={this.props.item.selectedBoxImage}
            />
          </div>
          <div className="cart-item-contents">
            <div className="item-title-container">
              <div className="item-title">{this.props.item.type}</div>
              <div className="item-title-subtext">
                {this.props.item.selectedBox}
              </div>
            </div>

            <div className="item-card">
              <b>Card: </b> {this.props.item.card}
            </div>
            <div className="item-contents">
              <b>Gift Box Contents: </b>{' '}
              {this.props.item.selectedProducts &&
                this.cartItemsString(this.props.item.selectedProducts)}
            </div>
            <div
              className="item-remove"
              type="button"
              onClick={(e) => {
                e.preventDefault()
                this.props.removeItem(this.props.cartId, this.props.item)
              }}
            >
              Remove
            </div>
          </div>
        </div>
        <div className="cart-item-price">{this.props.item.price}</div>
        <div className="cart-item-quantity">
          <div className="cart-item-input-wrap">
            <div
              className="cart-item-increase-decrease"
              onClick={(e) => {
                e.preventDefault()
                this.props.decreaseQuantity(this.props.cartId)
              }}
            >
              -
            </div>
            <input type="text" disabled={true}>
              {this.props.item.quantity}
            </input>
            <div
              className="cart-item-increase-decrease"
              onClick={(e) => {
                e.preventDefault()
                this.props.increaseQuantity(this.props.cartId)
              }}
            >
              +
            </div>
          </div>
        </div>
        <div className="cart-item-subtotal">
          {this.props.item.price * this.props.item.quantity}
        </div>
      </div>
    )
  }
}

export default CartItem
