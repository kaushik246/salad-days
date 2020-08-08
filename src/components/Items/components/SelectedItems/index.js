import React, { Component } from 'react'
import './styles.scss'

import SelectedImages from './components/SelectedImages'
import BoxContents from './components/BoxContents'

class SelectedItems extends Component {
  render() {
    return (
      <div className="selected-items-container">
        <div className="selected-items-meter">
          <div className="box-size">
            <div className="size-meter">
              <p className="box-size-text">MINI</p>
            </div>
          </div>
          <div className="box-size">
            <div className="size-meter">
              <p className="box-size-text">REGULAR</p>
            </div>
          </div>
          <div className="box-size">
            <div className="size-meter">
              <p className="box-size-text">BIG</p>
            </div>
          </div>
        </div>
        <div className="selected-items-data">
          <div className="selected-items-images">
            <SelectedImages
              selectedProducts={Object.values(this.props.selectedProducts)}
            />
          </div>
          <div className="selected-items-contents">
            <BoxContents
              selectedProducts={Object.values(this.props.selectedProducts)}
              removeFromBox={this.props.removeFromBox}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SelectedItems
