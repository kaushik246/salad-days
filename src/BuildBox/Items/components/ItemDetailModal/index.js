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
export class ItemDetailModal extends Component {
  state = {
    modalIsOpen: true
  }
  openModal() {
    this.setState({
      modalIsOpen: true
    })
  }

  afterOpenModal() {}

  render() {
    return (
      <Modal
        isOpen={this.props.itemDetailModal}
        style={customStyles}
        onRequestClose={this.props.closeDetailModal}
        contentLabel="Item Detail Modal"
      >
        <div className="item-detail-modal-container">
          <div className="item-image-container">
            <img src="https://cdn.shopify.com/s/files/1/0450/7985/5254/products/sanitizerbottle_1024x1024@2x.jpg?v=1598077367" />
          </div>
          <div className="item-detail-container">
            <div className="item-title-container">{this.props.title}</div>
            <div className="item-description-container">
              {this.props.description}
            </div>
            <div className="item-ingredients-container">
              Contents: {this.props.ingredients}
            </div>
            <div className="items-detail-buttons-container">ADD TO BOX</div>
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
)(ItemDetailModal)
