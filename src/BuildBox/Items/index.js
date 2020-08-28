import React, { Component } from 'react'
import { connect } from 'react-redux'

import ItemsList from './components/ItemsList'
import SelectedItems from './components/SelectedItems'
import Header from '../generic/Header'
import { fetchProductsList, addToBox, removeFromBox } from './actions'
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
        />
        <ItemsList
          productList={this.props.items.productList}
          addToBox={this.props.addToBox}
          removeFromBox={this.props.removeFromBox}
          selectedProducts={this.props.items.selectedProducts}
          totalVolumetricWeight={this.props.items.totalVolumetricWeight}
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
    setCurrentStep
  }
)(Items)
