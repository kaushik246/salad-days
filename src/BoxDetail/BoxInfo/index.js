import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

const BoxInfo = () => {
  const [descriptionState, setDescriptionState] = useState(true)
  const [includesState, setIncludesState] = useState(true)

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
          <div
            className="description-content"
            onClick={(e) => e.stopPropagation()}
          >
            Inspired by moments spent under a striped umbrella, this box gives
            her permission to chill. With a fun journal, catch-all bag, a face
            mask, candle, and a sweet treat, this is recipe for the perfect
            staycation, whether it’s enjoyed under a cabana, or under the
            covers.
          </div>
        )}
      </div>
    </div>
  )
}

export default BoxInfo
