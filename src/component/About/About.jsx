import React from 'react'
import './About.css'
import img from '../../assets/punjabiThali.jpg'
import img2 from '../../assets/misal.jpg'
import img3 from '../../assets/surmaiThali.jpg'

const About = () => {
    return (
        <section className="about">

            {/* Hero */}
            <div className="about-hero">
                <div className="about-hero-overlay"></div>
                <div className="about-hero-content">
                    <span className="about-badge">🍽️ Our Story</span>
                    <h1>Born from a Love of <span className="about-highlight">Real Food</span></h1>
                    <p>From humble kitchens to your screen — Foodie brings the soul of Indian cuisine to every plate.</p>
                </div>
            </div>

            {/* Story Section */}
            <div className="about-story">
                <div className="about-story-text">
                    <h2>Who We Are</h2>
                    <p>Foodie was founded in 2022 by a group of food lovers who believed that great food should be accessible to everyone. We started with a small menu of 10 dishes and a big dream — to celebrate the rich, diverse flavours of India.</p>
                    <p>Today, we serve over 26 authentic dishes ranging from Maharashtra's iconic Misal Pav and Vada Pav to royal Rajasthani Thalis and coastal Surmai delicacies. Every dish is crafted with fresh ingredients, traditional recipes, and a whole lot of love.</p>
                    <div className="about-stats">
                        <div className="stat"><span>26+</span><p>Menu Items</p></div>
                        <div className="stat"><span>10K+</span><p>Happy Customers</p></div>
                        <div className="stat"><span>5★</span><p>Avg Rating</p></div>
                    </div>
                </div>
                <div className="about-story-img">
                    <img src={img} alt="Punjabi Thali" />
                </div>
            </div>

            {/* Values */}
            <div className="about-values">
                <h2>Why Choose Foodie?</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">🌿</div>
                        <h3>Fresh Ingredients</h3>
                        <p>We source locally grown, seasonal ingredients every single day to ensure maximum freshness and flavour.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">👨‍🍳</div>
                        <h3>Expert Chefs</h3>
                        <p>Our chefs bring decades of culinary expertise, blending traditional techniques with modern presentation.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🚀</div>
                        <h3>Lightning Fast</h3>
                        <p>From order to doorstep in under 30 minutes. We respect your time as much as your taste buds.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">❤️</div>
                        <h3>Made with Love</h3>
                        <p>Every dish carries the warmth of a home-cooked meal. Because food is not just fuel — it's an emotion.</p>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className="about-gallery">
                <h2>A Glimpse of Our Kitchen</h2>
                <div className="gallery-grid">
                    <img src={img} alt="Punjabi Thali" />
                    <img src={img2} alt="Misal Pav" />
                    <img src={img3} alt="Surmai Thali" />
                </div>
            </div>

        </section>
    )
}
export default About