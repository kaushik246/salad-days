import React, { Component } from 'react'
import './styles.scss'
import './responsive.css'

class SelectedImages extends Component {
  render() {
    return (
      <div className="selected-items-images-container">
        {this.props.selectedProducts.map((product) => {
          var badgeClassName = 'count-badge'
          if (product.count == 0) badgeClassName += ' hide'
          return (
            <div className="item-image" key={product.title}>
              <a>
                <img
                  src={product.image}
                  className="box-image"
                  key="product.title"
                />
              </a>
              <div className={badgeClassName}>{product.count}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default SelectedImages
