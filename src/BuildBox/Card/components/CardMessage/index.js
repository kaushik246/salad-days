import React, { Component } from 'react'

import './styles.scss'

class CardMessage extends Component {
  render() {
    var remainingCharacters = 120
    return (
      <div className="card-msg-wrap">
        <div className="card-msg-container">
          <div className="card-selected">
            <div className="card-image">
              <img
                className="card-image-selected"
                src="https://cdn.shopify.com/s/files/1/0558/2845/products/7A1A0884_Cropped_400x400.jpg?v=1531094633"
              />
            </div>
            <div className="change-card-button">(Change Card)</div>
          </div>
          <div className="card-msg-data">
            <div className="card-msg-to-from">
              <div className="card-msg-to">
                <div id="card-msg-to-label" className="card-label">
                  To
                </div>
                <input
                  id="card-msg-from-input"
                  className="card-msg-input"
                  type="text"
                  placeholder="To"
                />
              </div>
              <div className="card-msg-from">
                <div id="card-msg-from-label" className="card-label">
                  From
                </div>
                <input
                  id="card-msg-to-input"
                  className="card-msg-input"
                  type="text"
                  placeholder="From"
                />
              </div>
            </div>
            <div className="card-msg-description">
              <div id="card-msg-description-label" className="card-label">
                Message on Card
              </div>
              <textarea
                id="card-msg-content"
                placeholder="Enter your card message here. 120 characters max."
                maxLength="120"
                rows="6"
              />
              <div
                id="msg-remaining-characters"
                className="card-msg-characters"
              >
                {remainingCharacters} characters remaining
              </div>
              <div className="card-msg-checkbox-container">
                <input
                  type="checkbox"
                  id="empty-msg-checkbox"
                  className="empty-msg-check"
                />
                <span>
                  Click here and we’ll send the card blank and outside the
                  BOXFOX for you to write yourself!
                </span>
              </div>
              <div class="card-msg-completed add-to-cart">Add to Cart</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CardMessage
