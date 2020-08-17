import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import BuildBox from './BuildBox'
import Shop from './Shop'
import Cart from './Cart'
import BoxDetail from './BoxDetail'
import { setCurrentStep } from './Stepper/actions'
import { Route, withRouter, Switch } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          {/*Build A Box*/}
          <Route exact path="/" component={BuildBox} />
          <Route exact path="/buildBox" component={BuildBox} />
          {/*Box Detail */}
          <Route exact path="/product" component={BoxDetail} />
          {/*Cart*/}
          <Route exact path="/cart" component={Cart} />
          {/*Shop*/}
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.app.user
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { setCurrentStep }
  )(App)
)
