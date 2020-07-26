import React from 'react';
import './style.css'

const Header = () => {
    return (
        <header className="header">

            <nav className="headerMenu">
                <a href="#">Home</a>
                <a href="#">ContactUs</a>
                <a href="#">AboutUs</a>
            </nav>

            <div className="headerMenuIcon">
                <a href="https://www.facebook.com/" target="blank"><i className="fab fa-facebook"></i></a>
                <a href="https://www.linkedin.com/" target="blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.twitter.com/" target="blank"><i className="fab fa-twitter"></i></a>
                <a href="https://www.google.com/" target="blank"><i className="fab fa-google"></i></a>
                <a href="https://www.youtube.com/" target="blank"><i className="fab fa-youtube"></i></a>
                <a href="https://www.instagram.com/" target="blank"><i className="fab fa-instagram-square"></i></a>
                
            </div>

        </header>
    );
};

export default Header;