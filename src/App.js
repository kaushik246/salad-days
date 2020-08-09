import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import BuildBox from './BuildBox'

export class App extends Component {
  render() {
    return (
      <div>
        <BuildBox 
          items={this.props.items}
          card={this.props.card}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.app.user,
    items: state.items,
    card: state.card
  }
}

export default connect(mapStateToProps)(App)
