import React, { Component } from 'react'
import { connect } from 'react-redux'

import CardList from './components/CardList'
import CardMessage from './components/CardMessage'
import Header from '../generic/Header'
import {
  fetchCardList,
  addToBox,
  updateCardInBox,
  updateMessageFields
} from './actions'

import { setCurrentStep } from './../../Stepper/actions'
import { addBoxToCart } from './../../Cart/actions'

import './styles.scss'
import './responsive.css'

const mapStateToProps = (state) => {
  return {}
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
        {!this.props.card.selectedCard || this.props.card.changeCard ? (
          <CardList
            cardList={this.props.card.cardsList}
            addToBox={this.props.addToBox}
          />
        ) : (
          <CardMessage
            cardList={this.props.card.cardsList}
            updateCardInBox={this.props.updateCardInBox}
            selectedCard={this.props.card.selectedCard}
            updateMessageFields={this.props.updateMessageFields}
            to={this.props.card.to}
            from={this.props.card.from}
            message={this.props.card.message}
            setCurrentStep={this.props.setCurrentStep}
            addBoxToCart={this.props.addBoxToCart}
            selectedProducts={this.props.items.selectedProducts}
            selectedBox={this.props.items.selectedBox}
          />
        )}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {
    fetchCardList,
    addToBox,
    updateCardInBox,
    updateMessageFields,
    setCurrentStep,
    addBoxToCart
  }
)(Card)
