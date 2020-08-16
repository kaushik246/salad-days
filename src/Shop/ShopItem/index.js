import React, { Component } from 'react'
import './styles.scss'

class ShopItem extends Component {
  render() {
    return (
      <div
        className="product-container"
        onClick={() => {
          if (this.props.quantity !== 0) {
            console.log('Hello')
          }
        }}
      >
        <div className="container">
          <img className="product-image image" src={this.props.image} />
          <div className="overlay" />
          {this.props.quantity === 0 && (
            <div className="button product-sold-out">
              <a href="#" className="text">
                OUT OF STOCK
              </a>
            </div>
          )}
        </div>
        <div className="product-details">
          <div className="title">{this.props.title}</div>
          <div className="price">${this.props.price}</div>
          {this.props.quantity === 0 && <div className="title">Sold Out</div>}
        </div>
      </div>
    )
  }
}

export default ShopItem
