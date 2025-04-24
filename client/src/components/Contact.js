import React from 'react';
import logo from '../imgs/logo.svg';
import { Routes, Route, Link } from 'react-router-dom';

const Contact = () => {
    return (

        <div class="Home">
                <div className="menu-container">
                    <div className="logo-container">
                        <Link to="/">
                            <img src={logo} alt="Logo" className="logo" />
                        </Link>
                    </div>
                    <center>
                        <div className="logo-container2">
                            <Link className="no-effect" to="/">Home</Link>
                            <Link className="no-effect" to="/docs">Docs</Link>
                            <Link className="no-effect actual" to="/contact">Contact</Link>
                            <Link className="no-effect" to="/dapps">Dapps</Link>
                        </div>
                    </center>
                    <div className="profile-container">
                    </div>
                </div>
            <footer className="footer">
                <p>Created by Sportiverse Labs © {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
};

export default Contact;