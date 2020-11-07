import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import Shop from './Shop'
import Cart from './Cart'
import BoxDetail from './BoxDetail'
import CorporateGifting from './CorporateGifting'
import Nav from './Nav'
import { setCurrentStep } from './Stepper/actions'
import { Route, withRouter, Switch } from 'react-router-dom'
import { createCheckout, fetchCheckout, fetchCards } from './Shop/actions'
import { setNavPage } from './Nav/actions'
import ReactPixel from 'react-facebook-pixel';


const advancedMatching = { em: 'aditya.kaushik246@gmail.com' };
const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};
ReactPixel.init('795853594325842', advancedMatching, options);

export class App extends Component {
  componentDidMount() {
    if (!this.props.cart.checkoutId) {
      if (localStorage.getItem('saladDaysCheckoutId')) {
        this.props.fetchCheckout(localStorage.getItem('saladDaysCheckoutId'))
      } else this.props.createCheckout()
    }
    if (!this.props.shop.cards) {
      this.props.fetchCards()
    }
  ReactPixel.pageView();
  }
  state = {
    modalIsOpen: true
  }
  openModal() {
    this.setState({
      modalIsOpen: true
    })
  }

  afterOpenModal() {}

  render() {
    return (
      <Fragment>
        <Nav history={this.props.history} />
        <Switch>
          {/*Build A Box*/}
          <Route exact path="/" component={Shop} />
          {/*Box Detail */}
          <Route exact path="/product/:id" component={BoxDetail} />
          {/*Cart*/}
          <Route exact path="/cart" component={Cart} />
          {/*Shop*/}
          <Route exact path="/shop" component={Shop} />
          {/*Corporate Gifting*/}
          <Route exact path="/corporateGifting"
            //component={CorporateGifting}
            render={(props) => (
              <CorporateGifting {...props} setNavPage={this.props.setNavPage} />
            )}
          />
          <Route path="*" component={Shop} />
        </Switch>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.app.user,
    cart: state.cart,
    shop: state.shop
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { setCurrentStep, createCheckout, fetchCheckout, fetchCards, setNavPage }
  )(App)
)
