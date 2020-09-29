import React, { useState } from 'react'
import { connect } from 'react-redux'
import './styles.scss'

const CorporateGifting = () => {
  const [company, setCompany] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')
  return (
    <div className="corporate-gifting-main-container">
      <div className="wrapper">
        <div className="corporate-gifting-title-container">
          WE WOULD LOVE TO CONNECT
        </div>
        <div className="corporate-gifting-title-text">
          Welcome to Salad Days Concierge! The ultimate, all-in-one portal built
          to help you more effectively meet your gifting needs.
        </div>
        <div className="corporate-gifting-title-summary">
          Please enter your contact information in the fields below and a
          designated Salad Days Concierge will be in touch to show you around.
        </div>
        <div className="corporate-gifting-field">
          <input
            id="company-input"
            className="company-input"
            type="text"
            placeholder="Company"
            value={company}
          />
        </div>
        <div className="corporate-gifting-field">
          <input
            id="first-name-input"
            className="first-name-input"
            type="text"
            placeholder="First Name"
            value={firstName}
          />
        </div>
        <div className="corporate-gifting-field">
          <input
            id="last-name-input"
            className="last-name-input"
            type="text"
            placeholder="Last Name"
            value={lastName}
          />
        </div>
        <div className="corporate-gifting-field">
          <input
            id="email-input"
            className="email-input"
            type="text"
            placeholder="Email"
            value={email}
          />
        </div>
        <div className="corporate-gifting-field">
          <input
            id="phone-input"
            className="phone-input"
            type="text"
            placeholder="Phone number"
            value={phoneNumber}
          />
        </div>
        <div className="corporate-gifting-field">
          <textarea
            id="message-input"
            className="message-input"
            type="text"
            placeholder="Message...."
            value={message}
          />
        </div>
        <div
          className="corporate-gifting-submit"
          type="text"
          onClick={() => {
            console.log('submited')
            this.props.history.push('/shop')
          }}
        >
          <div className="submit-button-text">REQUEST</div>
        </div>
      </div>
    </div>
  )
}

export default CorporateGifting
