import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-hero">
                <div className="contact-hero-overlay"></div>
                <div className="contact-hero-content">
                    <span className="contact-badge">📬 Get In Touch</span>
                    <h1>We'd Love to <span className="contact-highlight">Hear From You</span></h1>
                    <p>Have a question, feedback, or just want to say hi? Drop us a message!</p>
                </div>
            </div>

            <div className="contact-body">
                <div className="contact-info">
                    <h2>Contact Info</h2>
                    <div className="info-item"><span>📍</span><div><strong>Address</strong><p>123 Foodie Lane, Mumbai, Maharashtra 400001</p></div></div>
                    <div className="info-item"><span>📞</span><div><strong>Phone</strong><p>+91 99999 11111</p></div></div>
                    <div className="info-item"><span>📧</span><div><strong>Email</strong><p>hello@foodie.in</p></div></div>
                    <div className="info-item"><span>⏰</span><div><strong>Hours</strong><p>Mon – Sun: 9:00 AM – 11:00 PM</p></div></div>
                </div>

                <form className="contact-form">
                    <h2>Send a Message</h2>
                    <div className="form-row">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message 🚀</button>
                </form>
            </div>
        </section>
    )
}
export default Contact