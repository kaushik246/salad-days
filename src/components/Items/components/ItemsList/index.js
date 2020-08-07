import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

import Product from '../Product';

class ItemsList extends Component {
	render() {
		return (
			<div className="item-list-container">
				{this.props.productList.map((product) => (
					<Product
						product={product}
						image={product.image}
						price={product.price}
						discountPrice={product.discountPrice}
						quantity={product.quantity}
						addToBox={this.props.addToBox}
						removeFromBox={this.props.removeFromBox}
						title={product.title}
						key={product.title}
						selectedQuantity={product.selectedQuantity}
					/>
					))
				}
			</div>
		);
	}
}

export default ItemsList;
