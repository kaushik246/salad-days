import React, { Component } from 'react'
import './styles.scss'
import './responsive.css'

class ShopItem extends Component {
  render() {
    return (
      <div
        className="product-container"
        onClick={() => {
          if (this.props.item.availableForSale) {
            this.props.history.push(`/product/${this.props.item.id}`)
          }
        }}
      >
        <div className="container">
          <img
            className="product-image image"
            src={this.props.item.images[0].src}
          />
          <div className="overlay" />
          {!this.props.item.availableForSale && false && (
            <div className="button product-sold-out">
              <a href="#" className="text">
                OUT OF STOCK
              </a>
            </div>
          )}
        </div>
        <div className="product-details">
          <div className="title">{this.props.item.title}</div>
          {(this.props.item.variants[0].compareAtPrice !== this.props.item.variants[0].price &&  this.props.item.variants[0].compareAtPrice) ? (
            <div className="compare-price">
              <p className="price">Rs. {this.props.item.variants[0].price}</p>
              <p className="actual-price">{this.props.item.variants[0].compareAtPrice}</p>
            </div>
          ) : (
            <div className="price">Rs. {this.props.item.variants[0].price}</div>)
          }
          {!this.props.item.availableForSale && (
            <div className="title">Sold Out</div>
          )}
        </div>
      </div>
    )
  }
}

export default ShopItem
