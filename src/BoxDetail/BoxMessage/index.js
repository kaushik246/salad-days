import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

const BoxMessage = ({
  to,
  from,
  message,
  changeTo,
  changeFrom,
  changeMessage
}) => {
  var remainingCharacters = 120 - message.length
  return (
    <div className="box-msg-data">
      <div className="box-msg-to-from">
        <div className="box-msg-to">
          <div id="box-msg-to-label" className="card-label">
            To
          </div>
          <input
            id="box-msg-to-input"
            className="box-msg-input"
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => {
              e.stopPropagation()
              changeTo(e.target.value)
            }}
          />
        </div>
        <div className="box-msg-from">
          <div id="box-msg-from-label" className="card-label">
            From
          </div>
          <input
            id="box-msg-from-input"
            className="box-msg-input"
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => {
              changeFrom(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="box-msg-description">
        <div id="box-msg-description-label" className="card-label">
          Message on Card
        </div>
        <textarea
          id="box-msg-content"
          placeholder="Enter your card message here. 120 characters max."
          maxLength="120"
          rows="6"
          value={message}
          onChange={(e) => {
            changeMessage(e.target.value)
          }}
        />
        <div id="msg-remaining-characters" className="box-msg-characters">
          {remainingCharacters} characters remaining
        </div>
      </div>
    </div>
  )
}

export default BoxMessage
