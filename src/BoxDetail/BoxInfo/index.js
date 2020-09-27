import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

const BoxInfo = ({description}) => {
  return (
    <div className="box-info-main-container">
      <div
        className="description-button-container"
      >
        <div className="description-title">DESCRIPTION</div>
        <hr />
          <div
            className="description-content"
          >
            {description}
          </div>
      </div>
    </div>
  )
}

export default BoxInfo
