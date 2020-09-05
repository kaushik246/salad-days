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
    transform: 'translate(-50%, -50%)'
  }
}
export class InfoModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.infoModal}
        style={customStyles}
        onRequestClose={this.props.closeInfoModal}
        contentLabel="Info Modal"
      >
        <div className="info-modal-container">
          <div className="info-modal-title">{this.props.title}</div>
          <div className="info-modal-info">{this.props.info}</div>
          <div className="info-modal-button">
            <button
              className="info-modal-button-text"
              type="button"
              onClick={() => this.props.closeInfoModal()}
            >
              OKAY
            </button>
          </div>
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
)(InfoModal)
