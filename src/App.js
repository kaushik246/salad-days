import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import BuildBox from './BuildBox'
import Shop from './Shop'
import Cart from './Cart'
import BoxDetail from './BoxDetail'
import Nav from './Nav'
import { setCurrentStep } from './Stepper/actions'
import { Route, withRouter, Switch } from 'react-router-dom'
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
export class App extends Component {

  state = {
    modalIsOpen: true
  }
   openModal() {
    this.setState({
      modalIsOpen: true
    })
  }

  afterOpenModal() {

  }



  render() {
    return (
      <Fragment>
        <Nav
          history={this.props.history}
        />
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
        <Modal
          isOpen={false}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <button onClick={() => {}}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
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
