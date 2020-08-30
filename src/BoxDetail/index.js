import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

import ImageSlider from './ImageSlider'
import BoxInfo from './BoxInfo'
import BoxAttributes from './BoxAttributes'
import CardModal from './CardModal'

import { openCardModal, closeCardModal, setCard } from './actions'
import { fetchCardList } from './../BuildBox/Card/actions'

const mapStateToProps = (state) => {
  return {
    boxDetail: state.boxDetail,
    card: state.card
  }
}

class BoxDetail extends Component {
  componentDidMount() {
    this.props.fetchCardList()
  }
  render() {
    return (
      <div className="box-detail-main-container">
        <div className="box-detail-header-container">Home</div>
        <div className="box-detail-slider-info">
          <div className="box-detail-slider">
            <ImageSlider />
          </div>
          <div className="box-detail-info">
            <div className="box-name">CABANA</div>
            <div className="box-price">Rs. 1500</div>
            <BoxInfo />
            <BoxAttributes
              cardSelected={this.props.boxDetail.cardSelected}
              cardImage={this.props.boxDetail.cardImage}
              openCardModal={this.props.openCardModal}
              closeCardModal={this.props.closeCardModal}
            />
          </div>
        </div>
        <CardModal
          cardsList={this.props.card.cardsList}
          cardModal={this.props.boxDetail.cardModal}
          closeCardModal={this.props.closeCardModal}
          setCard={this.props.setCard}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { openCardModal, closeCardModal, setCard, fetchCardList }
)(BoxDetail)

/*
        <CardModal
          cardList={this.props.card.cardList}
          CardModal={this.props.boxDetail.CardModal}
          closeCardModal={this.props.closeCardModal}
        />

        */
