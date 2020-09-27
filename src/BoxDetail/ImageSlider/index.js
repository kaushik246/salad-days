import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

import ImageGallery from 'react-image-gallery'

class ImageSlider extends React.Component {
  render() {
    const images = this.props.images.map((imageData) => ({
      original: imageData.src,
      thumbnail: imageData.src
    }))
    return (
      <div className="image-slider-container">
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          showNav={true}
        />
      </div>
    )
  }
}
export default ImageSlider
