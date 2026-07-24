import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import backFood from '../../assets/backFood.jpg'

const Landing = () => {
    return (
        <div className="landing" style={{backgroundImage:`url(${backFood})`}}>
            <div className="landing-overlay"></div>
            <div className="landing-content">
                <span className="landing-badge">🌟 India's Favourite Food App</span>
                <h1>Taste the <span className="highlight">Flavours</span> of India</h1>
                <p>From street-side chaats to royal thalis — explore authentic dishes crafted with passion, served with love.</p>
                <div className="landing-btns">
                    <Link to="/menu" className="landing-btn-primary">Order Now 🍽️</Link>
                    <Link to="/about" className="landing-btn-secondary">Our Story</Link>
                </div>
                <div className="landing-features">
                    <div className="feature">🚀 Fast Delivery</div>
                    <div className="feature">👨‍🍳 Fresh & Homemade</div>
                    <div className="feature">💯 100% Authentic</div>
                </div>
            </div>
        </div>
    )
}

export default Landing
