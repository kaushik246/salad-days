import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

export class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-main-container">
          <div className="footer-logo">
            <img
              src="https://cdn.shopify.com/s/files/1/0445/1313/2702/files/logo-01.png?v=1601708076"
              className="salad-days-logo"
            />
            <p className="logo-text">
              Founded in 2014, Salad Days is a delivery-only company serving
              simple and real healthy food in Delhi NCR. We believe that the
              choices we make about what we eat have the most direct and mighty
              impact on the health of individuals and society.
            </p>
          </div>
          <div className="footer-options">
            <p className="option about">About</p>
            <p className="option story">Our Story</p>
            <p className="option salad">Salads</p>
          </div>
          <div className="footer-contact">
            <p className="contact us">Contact Us</p>
            <p className="contact text">
              Questions? We're here for you Monday to Friday, 9am to 6pm.
            </p>
            <p className="contact email">123@123.com</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
