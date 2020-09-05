import React, { Component } from 'react'
import { connect } from 'react-redux'

import ItemsList from './components/ItemsList'
import SelectedItems from './components/SelectedItems'
import Header from '../generic/Header'
import ItemDetailModal from './components/ItemDetailModal'
import {
  fetchProductsList,
  addToBox,
  removeFromBox,
  openDetailModal,
  closeDetailModal,
  openInfoModal,
  closeInfoModal
} from './actions'
import { setCurrentStep } from './../../Stepper/actions'

import './styles.scss'
import './responsive.css'

const mapStateToProps = (state) => {
  return {}
}

class Items extends Component {
  componentDidMount() {
    this.props.fetchProductsList(true)
  }
  render() {
    return (
      <div className="item-selection-step">
        <Header
          step={2}
          secondaryTitle="CHOOSE YOUR ITEMS"
          description="We’ve hand-selected the best products in one place. Select from the items below and fill up your box!"
        />
        <SelectedItems
          selectedBox={this.props.items.selectedBox}
          selectedProducts={this.props.items.selectedProducts}
          addToBox={this.props.addToBox}
          removeFromBox={this.props.removeFromBox}
          setCurrentStep={this.props.setCurrentStep}
          subTotal={this.props.items.subTotal}
          selectedItemsCount={this.props.items.selectedItemsCount}
          totalVolumetricWeight={this.props.items.totalVolumetricWeight}
          openDetailModal={this.props.openDetailModal}
          closeDetailModal={this.props.closeDetailModal}
          openInfoModal={this.props.openInfoModal}
          closeInfoModal={this.props.closeInfoModal}
          infoModal={this.props.items.infoModal}
          info={this.props.items.info}
          title={this.props.items.title}
        />
        <ItemsList
          productList={this.props.items.productList}
          addToBox={this.props.addToBox}
          removeFromBox={this.props.removeFromBox}
          selectedProducts={this.props.items.selectedProducts}
          totalVolumetricWeight={this.props.items.totalVolumetricWeight}
          openDetailModal={this.props.openDetailModal}
          closeDetailModal={this.props.closeDetailModal}
        />
        <ItemDetailModal
          title="Sanitizer Bottle"
          description="This Korean beauty face mask is a nourishing and moisturizing face mask that lightens your face to make it glow."
          ingredients="Honey Key Ingredients: Dipropylene glycol, capric trigylceride, glycerin, pennywort extract, peony root extract, matricaria extract, honey extract, cocoa extract, evening primrose extract"
          addToBox={this.props.addToBox}
          removeFromBox={this.props.removeFromBox}
          itemDetailModal={this.props.items.itemDetailModal}
          closeDetailModal={this.props.closeDetailModal}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {
    fetchProductsList,
    addToBox,
    removeFromBox,
    setCurrentStep,
    openDetailModal,
    closeDetailModal,
    openInfoModal,
    closeInfoModal
  }
)(Items)
