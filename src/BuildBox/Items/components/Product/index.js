import React, { Component } from 'react'
import './styles.scss'
import './responsive.css'

class Product extends Component {
  render() {
    return (
      <div className="item-container">
        <div
          className="container"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            this.props.openDetailModal()
          }}
          type="button"
        >
          <img className="item-image image" src={this.props.image} />
          {this.props.remainingVolumetricWeight < this.props.weight ? (
            <div class="too-large-text">
              <h4>TOO LARGE</h4>
            </div>
          ) : null}
          <div className="overlay" />
          {this.props.quantity === 0 ? (
            <div className="items-button product-sold-out">
              <a href="#" className="text">
                OUT OF STOCK
              </a>
            </div>
          ) : this.props.selectedQuantity === 0 ? (
            this.props.totalVolumetricWeight <= 8 &&
            this.props.remainingVolumetricWeight >= this.props.weight ? (
              <div className="items-button">
                <a
                  href="#"
                  className="text"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    this.props.addToBox(this.props.product)
                  }}
                >
                  ADD TO BOX
                </a>
              </div>
            ) : (
              <div className="items-button">
                <a
                  href="#"
                  className="text"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                >
                  TOO LARGE
                </a>
              </div>
            )
          ) : this.props.quantity === this.props.selectedQuantity ||
            this.props.remainingVolumetricWeight === 0 ||
            this.props.remainingVolumetricWeight < this.props.weight ? (
            <div className="items-button">
              <a
                className="decrease"
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  this.props.removeFromBox(this.props.product)
                }}
              >
                -
              </a>
              <a
                href="#"
                className="text-limit-reached"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                }}
              >
                {this.props.remainingVolumetricWeight === 0
                  ? 'NO SPACE LEFT'
                  : 'MAX LIMIT REACHED'}
              </a>
            </div>
          ) : (
            <div className="items-button product-exists">
              <div className="product-listing">
                <a
                  className="decrease"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    this.props.removeFromBox(this.props.product)
                  }}
                >
                  -
                </a>
                <a
                  className="quantity-text"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  {this.props.selectedQuantity} IN BOX
                </a>
                <a
                  className="increase"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    this.props.addToBox(this.props.product)
                  }}
                >
                  +
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="items-details">
          <div className="items-title">{this.props.title}</div>
          <div className="items-price">${this.props.price}</div>
        </div>
      </div>
    )
  }
}

export default Product
