import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import BuildBox from './BuildBox'

import { fetchProductsList, addToBox, removeFromBox } from './actions'
export class App extends Component {
  render() {
    return (
      <div>
        <BuildBox {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.app.user,
    items: state.items
  }
}

export default connect(mapStateToProps,{
  fetchProductsList,
  addToBox,
  removeFromBox
})(App)
