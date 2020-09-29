import React, { Component } from 'react'
import './styles.scss'
import './responsive.css'

export class CartItem extends Component {
  cartItemsString = (items) => {
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
            <img className="box-item-image" src={this.props.image} />
          </div>
          <div className="cart-item-contents">
            <div className="item-title-container">
              <div className="item-title">{this.props.title}</div>
              <div className="item-title-subtext">{'Box'}</div>
            </div>

            <div className="item-card">
              <b>Card: </b> {'Card'}
            </div>
            {/*(
              <div className="item-contents">
                <b>Gift Box Contents: </b>{' '}
                {this.props.item.selectedProducts &&
                  this.cartItemsString(this.props.item.selectedProducts)}
              </div>
            )*/}
            <div
              className="item-remove"
              type="button"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              Remove
            </div>
          </div>
        </div>
        <div className="cart-item-price">{this.props.price}</div>
        <div className="cart-item-quantity">
          <div className="cart-item-input-wrap">
            <div
              className="cart-item-increase-decrease"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              -
            </div>
            <input
              type="text"
              disabled={true}
              placeholder={this.props.quantity}
            />
            <div
              className="cart-item-increase-decrease"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              +
            </div>
          </div>
        </div>
        <div className="cart-item-subtotal">
          {parseInt(this.props.price, 10) * parseInt(this.props.quantity, 10)}
        </div>
      </div>
    )
  }
}

export default CartItem
