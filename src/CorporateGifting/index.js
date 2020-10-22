import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './styles.scss'
import './responsive.css'

const CorporateGifting = ({ setNavPage }) => {
  const [company, setCompany] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')
  const [messageStatus, setMessageStatus] = useState(false)
  setNavPage('corporateGifting')

  return (
    <div className="corporate-gifting-main-container">
      <div className="wrapper">
        {!messageStatus && <>
        <div className="corporate-gifting-title-container">
           CONNECT
        </div>
        <div className="corporate-gifting-title-text">
Rest assured. We take pride in customizing, personalizing and executing hassle-free gifting on your behalf. Anywhere in India.
        </div>
        <div className="corporate-gifting-title-summary">
Please enter your contact information in the fields below and a designated Salad Days Concierge will get in touch at the earliest.

        </div>
        <div className="corporate-gifting-field">
          <input
            id="company-input"
            className="company-input"
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => {
              e.stopPropagation()
              setCompany(e.target.value)
            }}
          />
        </div>
        <div className="corporate-gifting-field">
          <input
            id="first-name-input"
            className="first-name-input"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              e.stopPropagation()
              setFirstName(e.target.value)
            }}
          />
        </div>
        <div className="corporate-gifting-field">
          <input
            id="last-name-input"
            className="last-name-input"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              e.stopPropagation()
              setLastName(e.target.value)
            }}
          />
        </div>
        <div className="corporate-gifting-field">
          <input
            id="email-input"
            className="email-input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              e.stopPropagation()
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className="corporate-gifting-field">
          <input
            id="phone-input"
            className="phone-input"
            type="text"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => {
              e.stopPropagation()
              setPhoneNumber(e.target.value)
            }}
          />
        </div>
        <div className="corporate-gifting-field">
          <textarea
            id="message-input"
            className="message-input"
            type="text"
            placeholder="Message...."
            value={message}
            onChange={(e) => {
              e.stopPropagation()
              setMessage(e.target.value)
            }}
          />
        </div>
        <div
          className="corporate-gifting-submit"
          type="text"
          onClick={(e) => {
            e.preventDefault()
            try {
                if ((firstName || message || company || lastName || phoneNumber) && email) {
                  emailjs.send('service_1n28hyb', 'template_wicczmq', {
                    from_name: firstName + ' ' + lastName,
                    message: message,
                    company: company,
                    phone_number: phoneNumber,
                    email: email
                  }, 'user_awLjPGksRSyCcSeqn0oCS')
                setMessageStatus(true);
                }
          } catch(e) {
            setMessageStatus(false);
          }
        }}
        >
          <div className="submit-button-text">Request</div>
        </div>
        </>}
        {messageStatus && <div
          className="corporate-gifting-thanks successful"
          type="text"
          onClick={() => {
            setMessageStatus(false)
            setFirstName('')
            setLastName('')
            setPhoneNumber('')
            setEmail('')
            setMessage('')
            setCompany('')
          }}
        >
          <div className="submit-button-text">Successfully sent the Request</div>
        </div>}
      </div>
    </div>
  )
}

export default CorporateGifting
