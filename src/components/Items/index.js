import React, { Component } from 'react'
import { connect } from 'react-redux'

import ItemsList from './components/ItemsList'
import SelectedItems from './components/SelectedItems'
import { fetchProductsList, addToBox, removeFromBox } from './actions'

import './styles.scss'

const mapStateToProps = (state) => {
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
    console.log(this.props.selectedProducts)
    return (
      <div className="item-selection-step">
        <SelectedItems
          selectedProducts={this.props.selectedProducts}
          addToBox={this.props.addToBox}
          removeFromBox={this.props.removeFromBox}
        />
        <hr />
        <ItemsList
          productList={this.props.productList}
          addToBox={this.props.addToBox}
          removeFromBox={this.props.removeFromBox}
          selectedProducts={this.props.selectedProducts}
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
    removeFromBox
  }
)(Items)
