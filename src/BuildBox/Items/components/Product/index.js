import React, { Component } from 'react'
import './styles.scss'
import './responsive.css'

class Product extends Component {
  render() {
    return (
      <div className="item-container">
        <div className="container">
          <img className="product-image image" src={this.props.image} />
          <div className="overlay" />
          {this.props.quantity === 0 ? (
            <div className="items-button product-sold-out">
              <a href="#" className="text">
                OUT OF STOCK
              </a>
            </div>
          ) : this.props.selectedQuantity === 0 ? (
            <div className="items-button">
              <a
                href="#"
                className="text"
                onClick={(e) => {
                  e.preventDefault()
                  this.props.addToBox(this.props.product)
                }}
              >
                ADD TO BOX
              </a>
            </div>
          ) : this.props.quantity === this.props.selectedQuantity ? (
            <div className="items-button">
              <a href="#" className="text">
                MAX LIMIT REACHED
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
                    this.props.removeFromBox(this.props.product)
                  }}
                >
                  -
                </a>
                <a className="main" href="#">
                  {this.props.selectedQuantity} IN BOX
                </a>
                <a
                  className="increase"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
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
