import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import BuildBox from './BuildBox'
import Stepper from './Stepper';
import Cart from './Cart';

export class App extends Component {
  render() {
    const show = true;
    return (
      <div>
        {show && <Stepper 
          steps={[
            { title: 'STEP 1', subTitle: 'Packaging' },
            { title: 'STEP 2', subTitle: 'Items' },
            { title: 'STEP 3', subTitle: 'Card' },
            { title: 'STEP 4', subTitle: 'Done!' }]}
          activeStep={1} 
        />}
        {show &&<BuildBox 
          items={this.props.items}
          card={this.props.card}
        />}
        {!show && <Cart
          cart={this.props.cart}
        />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.app.user,
    items: state.items,
    card: state.card,
    cart: state.cart
  }
}

export default connect(mapStateToProps)(App)
