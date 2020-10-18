import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import './responsive.css'

import Modal from 'react-modal'
const imgsource = require('./finish-salad.png')
const customStyles = {
  content: {
    top: '150px',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    background: 'none',
    border: 'none',
    padding: '0px',
    borderRadius: '0'
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
        ariaHideApp={false}
      >
        <div
          className="info-modal-container"
          onClick={() => this.props.closeInfoModal()}
        >
          <div className="info-modal-title-container">
            <div className="info-title-primary title-label">
              {this.props.title}
            </div>
          </div>
          <div className="info-modal-button-container">
            <div className="info-button">OKAY</div>
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
