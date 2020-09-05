import React, { Component } from 'react'
import './styles.scss'

import SelectedImages from './components/SelectedImages'
import BoxContents from './components/BoxContents'
import InfoModal from './components/InfoModal'
import './responsive.css'

class SelectedItems extends Component {
  render() {
    return (
      <div className="selected-items-container">
        <div className="selected-items-meter">
          <div
            className={`running-container columns-${this.props.totalVolumetricWeight}`}
          >
            <div className="size-indicator">
              <p>SMALL</p>
            </div>
            <div className="size-indicator">
              <p>BIG</p>
            </div>
          </div>
        </div>
        <div className="selected-items-data">
          <div className="selected-items-images">
            <div className="selected-items-instructions-wrap">
              <div
                className={`selected-items-instructions ${
                  this.props.selectedItemsCount > 0 ? 'none' : 'show'
                }`}
              >
                <a href="#product-items-list-container">
                  Start selecting items to fill your box
                </a>
              </div>
            </div>
            <SelectedImages
              selectedProducts={Object.values(this.props.selectedProducts)}
              removeFromBox={this.props.removeFromBox}
              setCurrentStep={this.props.setCurrentStep}
            />
          </div>
          <div className="selected-items-contents">
            <BoxContents
              selectedProducts={Object.values(this.props.selectedProducts)}
              removeFromBox={this.props.removeFromBox}
              setCurrentStep={this.props.setCurrentStep}
              subTotal={this.props.subTotal}
              selectedBox={this.props.selectedBox}
              selectedItemsCount={this.props.selectedItemsCount}
              totalVolumetricWeight={this.props.totalVolumetricWeight}
              openInfoModal={this.props.openInfoModal}
              closeInfoModal={this.props.closeInfoModal}
            />
          </div>
        </div>
        <InfoModal
          openInfoModal={this.props.openInfoModal}
          closeInfoModal={this.props.closeInfoModal}
          infoModal={this.props.infoModal}
          info={this.props.info}
          title={this.props.title}
        />
      </div>
    )
  }
}

export default SelectedItems

/*
        <div className="selected-items-meter">
          <div className="box-size">
            <div className="size-meter">
              <p
                className={`box-size-text ${
                  this.props.totalVolumetricWeight <= 4
                    ? 'selected-box'
                    : 'non-selected-box'
                }`}
              >
                SMALL
              </p>
            </div>
          </div>
          <div className="box-size">
            <div className="size-meter">
              <p
                className={`box-size-text ${
                  this.props.totalVolumetricWeight > 4
                    ? 'selected-box'
                    : 'non-selected-box'
                }`}
              >
                BIG
              </p>
            </div>
          </div>
        </div>
        */
