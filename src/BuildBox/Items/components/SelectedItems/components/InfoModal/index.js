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
      >
        <div className="info-modal-container" onClick={() => this.props.closeInfoModal()}>
          <img className="info-modal-image" src={imgsource}/>
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
