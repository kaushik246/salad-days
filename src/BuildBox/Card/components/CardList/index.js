import React, { Component } from 'react'

import './styles.scss'
import './responsive.css'

class CardList extends Component {
  render() {
    return (
      <div className="card-list-container">
        {this.props.cardList.map((card) => {
          return (
            <div
              className="card-image-component"
              onClick={() => this.props.addToBox(card)}
            >
              <img src={card.image} className="card-image" />
              <div className="card-footer-text">{card.title}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default CardList
