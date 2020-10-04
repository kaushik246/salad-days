import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

const BoxInfo = ({ description }) => {
  const heading = description.split('|')[0]
  const includes = description.split('|')[1]
  return (
    <div className="box-info-main-container">
      <div className="description-button-container">
        <div className="description-title">DESCRIPTION</div>
        <hr />
        <div className="description-content heading">
          <i>{heading}</i>
        </div>
        <br />
        <div className="description-content">{includes}</div>
      </div>
    </div>
  )
}

export default BoxInfo
