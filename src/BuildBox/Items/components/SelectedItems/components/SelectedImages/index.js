import React, { Component } from 'react'
import './styles.scss'

class SelectedImages extends Component {
  render() {
    return (
      <div className="selected-items-images-container">
        {this.props.selectedProducts.map((product) => {
          return (
            <div className="item-image" key={product.title}>
              <a>
                <img
                  src={product.image}
                  className="box-image"
                  key="product.title"
                />
              </a>
              <div className="count-badge">{product.count}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default SelectedImages
