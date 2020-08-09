import React, { Component } from 'react'
import './styles.scss'
import Items from './Items'
import Packaging from './Packaging'
import Card from './Card'

export class BuildBox extends Component {
  render() {
    return (
      <div className="build-box-container">
        {true && (
          <div className="build-box-packaging">
            <Packaging {...this.props}/>
          </div>
        )}
        {true && (
          <div className="build-box-ietms">
            <Items {...this.props}/>
          </div>
        )}
        <div className="build-box-card">
          <Card {...this.props}/>
        </div>
      </div>
    )
  }
}

export default BuildBox
