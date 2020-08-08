import React, { Component } from 'react'
import { connect } from 'react-redux'

import CardList from './components/CardList'
import CardMessage from './components/CardMessage';
import Header from '../generic/Header'
import { fetchCardList, addToBox } from './actions'

import './styles.scss'

const mapStateToProps = (state) => {
	return {
		cardList: state.items.productList,
		selectedCard: state.items.selectedCard
	}
}

class Card extends Component {
	componentDidMount() {
		this.props.fetchCardList(true)
	}
	render() {
		return (
			<div className="card-selection-step">
				<Header
					step={3}
					secondaryTitle="CHOOSE YOUR CARD"
					description="Choose the perfect card for the occasion from our selection of exclusive designs. Our team handwrites each and every note to keep your gifts personal. (Plus, we have great handwriting.)"
				/>
				<CardList
					cardList={this.props.cardList}
					addToBox={this.props.addToBox}
				/>
				<CardMessage
					cardList={this.props.cardList}
					addToBox={this.props.addToBox}
					selectedCard={this.props.selectedCard}
				/>
			</div>
		)
	}
}

export default connect(
	mapStateToProps,
	{
		fetchCardList,
		addToBox
	}
)(Card)
