import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    'z-index': '10'
  }
}
export class CardModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.cardModal}
        style={customStyles}
        contentLabel="Item Detail Modal"
      >
        <div className="card-modal-header">
          <div className="card-modal-title">Choose Your Card</div>
          <div className="card-modal-summary">
            Choose the perfect card for the occasion from our selection of
            exclusive designs. Our team handwrites each and every note to keep
            your gifts personal. (Plus, we have great handwriting.)
          </div>
        </div>

        <div className="card-modal-container">
          {this.props.cardsList.map((card) => {
            return (
              <div
                className="card-image-component"
                onClick={() => this.props.setCard(card)}
              >
                <img src={card.image} className="card-image" />
                <div className="card-footer-text">{card.title}</div>
              </div>
            )
          })}
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(
  mapStateToProps,
  {}
)(CardModal)
