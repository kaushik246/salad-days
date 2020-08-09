import React, { Component } from 'react'
import './styles.scss'

class BoxContents extends Component {
  render() {
    console.log(this.props.selectedProducts)
    return (
      <div className="box-contents-container">
        <div className="box-contents-title">Box Contents</div>
        <div className="box-contents-list">
          {this.props.selectedProducts.map((product) => (
            <div className="box-item" key={1}>
              <div className="box-item-count">{product.count}</div>
              <div className="box-item-name">{product.title}</div>
              <div className="box-item-price">{product.price}</div>
              <div
                className="box-item-remove"
                onClick={this.props.removeFromBox(product)}
              >
                x
              </div>
            </div>
          ))}
        </div>
        <div className="box-contents-sub-section">
          <div className="box-contents-sub-title">
            Current Packaging | Regular
          </div>
          <div className="box-contents-sub-total">Box Subtotal: $33.00</div>
          <div className="complete-box-button">
            <p className="complete-box-button-text">COMPLETE BOX</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BoxContents
