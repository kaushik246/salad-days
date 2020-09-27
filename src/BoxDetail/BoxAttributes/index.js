import React, { useState } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import BoxMessage from '../BoxMessage'

const BoxAttributes = ({
  cardSelected,
  cardImage,
  boxSelected,
  boxImage,
  openCardModal,
  closeCardModal,
  boxesList
}) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedBox, setSelectedBox] = useState('ORIGINAL CRAFT BOX')

  const increaseItemQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseItemQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="box-attributes-main-container">
      <div className="quantity-field-container">
        <div className="quantity-title">QUANTITY</div>
        <div className="quantity-button-field">
          <div className="shop-item-input-wrap">
            <div
              className="shop-item-increase-decrease"
              onClick={() => {
                decreaseItemQuantity()
              }}
            >
              -
            </div>
            <input type="text" disabled={true} placeholder={quantity}></input>
            <div
              className="shop-item-increase-decrease"
              onClick={() => {
                increaseItemQuantity()
              }}
            >
              +
            </div>
          </div>
        </div>
      </div>
      <div className="box-selection-container">
        <div className="box-selection-title">BOX COLOR</div>
        <div className="box-image-selection">
          <div
            className={`box-info ${
              selectedBox === 'ORIGINAL CRAFT BOX' ? 'box-selected' : ''
            }`}
            onClick={() => {
              setSelectedBox('ORIGINAL CRAFT BOX')
            }}
          >
            <img
              className="box-image"
              src="https://cdn.shopify.com/s/files/1/0450/7985/5254/products/mainboxbrown_1024x1024@2x.jpg?v=1598077337"
            />{' '}
            <div className="box-title">ORIGINAL CRAFT BOX</div>
          </div>
          <div
            className={`box-info ${
              selectedBox === 'TIL BLUE BOX' ? 'box-selected' : ''
            }`}
            onClick={() => {
              setSelectedBox('TIL BLUE BOX')
            }}
          >
            <img
              className="box-image"
              src="https://cdn.shopify.com/s/files/1/0450/7985/5254/products/mainboxblue_1024x1024@2x.jpg?v=1598077337"
            />
            <div className="box-title">TIL BLUE BOX</div>
          </div>
        </div>
      </div>
      {cardSelected === '' ? (
        <div
          className="pick-card-container"
          type="button"
          onClick={(e) => {
            e.preventDefault()
            openCardModal()
          }}
        >
          <div className="pick-card-title">Pick a card</div>
        </div>
      ) : (
        <div>
          <div
            className="pick-card-container-selected"
            type="button"
            onClick={(e) => {
              e.preventDefault()
              openCardModal()
            }}
          >
            <img src={cardImage} className="selected-card-image" />
            <div className="selected-card-title-change-text">
              <div className="selected-card-title">{cardSelected}</div>
              <div className="selected-card-change">(change card)</div>
            </div>
          </div>
          <div>
            <BoxMessage />
          </div>
        </div>
      )}
      <div className="cart-button-container">
        <div className="cart-button-title"> Add to Cart . Rs 1000</div>
      </div>
    </div>
  )
}

export default BoxAttributes
