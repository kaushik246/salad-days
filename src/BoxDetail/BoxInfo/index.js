import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

const BoxInfo = () => {
  const [descriptionState, setDescriptionState] = useState(true);
  const [includesState, setIncludesState] = useState(false)

    return (
      <div className="box-info-main-container">
        <div
          className="description-button-container"
          onClick={() => {
            setDescriptionState(!descriptionState)
            setIncludesState(!includesState)
          }}
        >
          <div className="description-title">DESCRIPTION</div>
          <hr />
          {descriptionState && (
            <div className="description-content" onClick={(e) => e.stopPropagation()}>
              Inspired by moments spent under a striped umbrella, this box gives
              her permission to chill. With a fun journal, catch-all bag, a face
              mask, candle, and a sweet treat, this is recipe for the perfect
              staycation, whether it’s enjoyed under a cabana, or under the
              covers.
            </div>
          )}
        </div>
        <div
          className="includes-button-container"
          onClick={() => {
            setDescriptionState(!descriptionState)
            setIncludesState(!includesState)
          }}
        >
          <div className="includes-title">INCLUDES</div>
          <hr />
          {includesState && (
            <div className="include-content">
              Lapcos // Aqua Sheet Mask Rifle Paper Co // Cabana Notebook
              Beverly 3rd Candle Co // Summer Nights Candle Sugarfina // Italian
              Spritz Candies Baggu // Washable Brick Bag Keepsake Box &
              Handwritten Card
            </div>
          )}
        </div>
      </div>
    )
}  

export default BoxInfo
