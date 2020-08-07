import React, { Component } from 'react';
import './styles.css'

class Product extends Component {
	render() {
		return (
			<div className="product-container">
				<div className="container">
					<img className="image" src={this.props.image} alt="" />
					<div className="overlay"/>
					{this.props.quantity === 0 ? (
						<div className="product-sold-out">
							<a href="#" className="product-sold-out-text">
								SOLD OUT
							</a>
						</div>			
					) : (
						this.props.quantity === this.props.selectedQuantity ?
						(
							<div className="product-limit-reached">
								<a href="#" className="product-limit-reached-text">
									MAX LIMIT REACHED
								</a>
							</div>
						) : (
							this.props.selectedQuantity === 0 ? (
							<div className="product-available" onClick={() => {this.props.addToBox(this.props.product)}}>
								<a href="#" className="product-available-text">
									ADD TO BOX
								</a>
							</div>
							) : (
								<div className="product-available-buttons-container">
									<div className="product-quantity-decrease" onClick={() => {this.props.removeFromBox(this.props.product)}}>
										<div className="minus-sign"> - </div>
									</div>
									<div className="product-available-text" onClick={() => { }}>
										<div href="#" className="quantity-text">{this.props.selectedQuantity} IN BOX</div>
									</div>
									<div className="product-quantity-increase" onClick={() => { this.props.removeFromBox(this.props.product) }}>
										<div> + </div>
									</div>
								</div>
							)
						)
					)}
				</div>
				<div className="product-details">
					<div className="title">{this.props.title}</div>
					<div className="price">${this.props.price}</div>
				</div>
			</div>
		);
	}
}

export default Product;