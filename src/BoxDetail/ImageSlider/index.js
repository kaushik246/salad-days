import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/mixedbox_1024x1024@2x.jpg?v=1598202095',
    thumbnail: 'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/mixedbox_1024x1024@2x.jpg?v=1598202095',
  },
  {
    original: 'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/mixedbox_1024x1024@2x.jpg?v=1598202095',
    thumbnail: 'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/mixedbox_1024x1024@2x.jpg?v=1598202095',
  },
  {
    original: 'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/mixedbox_1024x1024@2x.jpg?v=1598202095',
    thumbnail: 'https://cdn.shopify.com/s/files/1/0450/7985/5254/products/mixedbox_1024x1024@2x.jpg?v=1598202095',
  },
];

class ImageSlider extends React.Component {
  render() {
    return (
      <div className="image-slider-container">
        <ImageGallery 
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
        />
      </div>
);
  }
}
export default ImageSlider