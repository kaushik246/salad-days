import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import './responsive.css'

import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    zIndex: 200,
  },
}
export class CardModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.cardModal}
        style={customStyles}
        contentLabel="Item Detail Modal"
        ariaHideApp={false}
      >
        {this.props.cards && (
          <>
            <div className="card-modal-header">
              <div className="card-modal-title">Choose Your Card</div>
              <div className="card-modal-summary">
Choose the perfect card that fits your occasion. We handwrite each note to make your gift personal. And, our handwriting isn’t bad either!
              </div>
            </div>

            <div className="card-modal-container">
              {this.props.cards.map((card) => {
                return (
                  <div
                    className="card-image-component"
                    onClick={() =>
                      this.props.setCard(card.title, card.images[0].src)
                    }
                    key={`${card.title}`}
                  >
                    <img src={card.images[0].src} className="card-image" />
                    <div className="card-footer-text">{card.title}</div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, {})(CardModal)
