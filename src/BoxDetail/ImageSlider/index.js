import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://cdn.shopify.com/s/files/1/0558/2845/products/1_9_1024x1024.jpg?v=1595544685',
    thumbnail: 'https://cdn.shopify.com/s/files/1/0558/2845/products/1_9_small_cropped.jpg?v=1595544685',
  },
  {
    original: 'https://cdn.shopify.com/s/files/1/0558/2845/products/1_9_1024x1024.jpg?v=1595544685',
    thumbnail: 'https://cdn.shopify.com/s/files/1/0558/2845/products/1_9_small_cropped.jpg?v=1595544685',
  },
  {
    original: 'https://cdn.shopify.com/s/files/1/0558/2845/products/1_9_1024x1024.jpg?v=1595544685',
    thumbnail: 'https://cdn.shopify.com/s/files/1/0558/2845/products/1_9_small_cropped.jpg?v=1595544685',
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