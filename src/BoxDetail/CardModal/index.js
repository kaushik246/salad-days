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
export class CardModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.cardModal}
        style={customStyles}
        onRequestClose={this.props.closeCardModal}
        contentLabel="Item Detail Modal"
      >
        <div className="card-modal-container">Hello</div>
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
