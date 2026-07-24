import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section brand">
                    <div className="footer-logo">🍔 Foodie</div>
                    <p>Bringing the soul of Indian cuisine to your doorstep. Fresh, authentic, and made with love.</p>
                    <div className="footer-socials">
                        <span>📘</span><span>📸</span><span>🐦</span><span>▶️</span>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <p>📍 123 Foodie Lane, Mumbai, MH 400001</p>
                    <p>📞 +91 98765 43210</p>
                    <p>📧 hello@foodie.in</p>
                    <p>⏰ Mon–Sun: 9AM – 11PM</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Foodie. All Rights Reserved. Made with ❤️ in India</p>
            </div>
        </footer>
    )
}
export default Footer