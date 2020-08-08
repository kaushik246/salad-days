import React, { Component } from 'react'
import './styles.scss'

class SelectedImages extends Component {
  render() {
    console.log(this.props.selectedProducts)
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
            </div>
          )
        })}
      </div>
    )
  }
}

export default SelectedImages
