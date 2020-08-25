import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

const mapStateToProps = (state) => {
  return {

  }
}

export class Nav extends Component {
  componentDidMount() {
    //this.props.fetchShopItems()
  }
  render() {
    return (
      <div className="nav-main-container">
        <div className="salad-days-image-section" type="button" onClick={() => this.props.history.push('/')}>
          <img
            src="https://cdn.shopify.com/s/files/1/0450/7985/5254/products/BankStatement_1024x1024@2x.png?v=1598351459"
            className="salad-days-logo"
          />
        </div>
        <div className="salad-days-sections" type="button" onClick={() => this.props.history.push('/shop')}>
          <p className="section-text">SHOP</p>
        </div>
        <div className="salad-days-sections" type="button" onClick={() => this.props.history.push('/buildBox')}>
          <p className="section-text">BUILD A BOX</p>
        </div>
        <div className="salad-days-sections" type="button" onClick={() => this.props.history.push('/')}>
          <p className="section-text">ENQUIRY</p>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {
    
  }
)(Nav)
