import React from 'react';
import ff from './ff.gif';
import './Footer.css'; // Assuming you want to style it separately

const Footer = () => {
    return (
        <footer className="footer">
            {/* Top Part */}
            <div className="footer-top">
                <h2>Subscribe to our emails</h2>
                <p>Subscribe to our mailing list for insider news, product launches, and more.</p>
                <input type="email" placeholder="Enter your email" className="footer-input" />
                <button className="footer-button">Subscribe</button>
            </div>

            {/* Bottom Part */}
            <div className="footer-bottom">
                <div className="footer-section">
                    <h3>CONTACT US</h3>
                    <p>Punjab, Faisalabad, Madinatown, Street Madina Masjid Warburton</p>
                    <p>bytebazzarofficial@gmail.com</p>
                    <p>03021203232</p>
                    <p>03001711058</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Blog Websites</a></li>
                        <li><a href="/">Sass Software</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">YouTube</a></li>
                        <li><a href="/">Catalog</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Our Image</h3>
                    <img src={ff} alt="Footer Image" className="footer-image" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
