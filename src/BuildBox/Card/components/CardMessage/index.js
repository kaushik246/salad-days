import React, { Component } from 'react'

import './styles.scss'

class CardMessage extends Component {
    render() {
        return (
            <div className="card-message-container">
                <div className="card-selected">
                    <div className="card-image">
                        <img
                            className="card-image-selected"
                            src="https://cdn.shopify.com/s/files/1/0558/2845/products/7A1A0884_Cropped_400x400.jpg?v=1531094633"
                        />
                    </div>
                    <div className="change-card-button">
                        (Change Card)
                    </div>
                </div>
                {false && <div className="card-message-data">
                    <div className="card-message-to-from">
                        <div className="card-message-to">
                            To
                            <input/>
                        </div>
                        <div className="card-message-from">
                            From
                            <input />
                        </div>
                    </div>
                    <div className="card-message-description">
                        Message on Card
                        <textarea/>
                    </div>
                </div>}
            </div>
        )
    }
}

export default CardMessage
