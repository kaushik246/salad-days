import React, { Component } from 'react'
import { connect } from 'react-redux'

import ItemsList from './components/ItemsList';
import SelectedItems from './components/SelectedItems'
import {
    fetchProductsList,
    addToBox,
    removeFromBox
} from './actions';

import './styles.scss';

const mapStateToProps = (state) => {
    return {
        productList: state.items.productList,
        selectedProductsList: state.items.selectedProductsList
    }
}

class Items extends Component {
    componentDidMount() {
        this.props.fetchProductsList(true)
    }
    render() {
        return (
            <div className="item-selection-step">
                <SelectedItems
                    selectedProductsList={this.props.selectedProductsList}
                    addToBox={this.props.addToBox}
                    removeFromBox={this.props.removeFromBox}
                />
                <hr/>
                <ItemsList
                    productList={this.props.productList}
                    addToBox={this.props.addToBox}
                    removeFromBox={this.props.removeFromBox}
                />
            </div>
        );
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
