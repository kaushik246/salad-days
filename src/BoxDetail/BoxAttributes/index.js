import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

const BoxAttributes = () => {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="box-attributes-main-container">
      <div className="quantity-field-container">
        <div className="quantity-title">QUANTITY</div>
        <div className="quantity-button-field">1</div>
      </div>
      <div className="pick-card-container">
        <div className="pick-card-title"> Pick a card</div>
      </div>
      <div className="cart-button-container">
        <div className="cart-button-title"> Add to Cart . Rs 1000</div>
      </div>
    </div>
  )
}

export default BoxAttributes
