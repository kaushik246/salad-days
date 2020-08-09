import React, { Component } from 'react'
import { connect } from 'react-redux'

import ItemsList from './components/ItemsList'
import SelectedItems from './components/SelectedItems'
import Header from '../generic/Header'

import './styles.scss'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    productList: state.items.productList,
    selectedProducts: state.items.selectedProducts
  }
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
          selectedProducts={this.props.items.selectedProducts}
          addToBox={this.props.addToBox}
          removeFromBox={this.props.removeFromBox}
        />
        <hr />
        <ItemsList
          productList={this.props.items.productList}
          addToBox={this.props.addToBox}
          removeFromBox={this.props.removeFromBox}
          selectedProducts={this.props.items.selectedProducts}
        />
      </div>
    )
  }
}

export default Items
