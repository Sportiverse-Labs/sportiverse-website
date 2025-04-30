import React from 'react';
import logo from '../imgs/logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import litepaper from '../imgs/litepaper.png';
import paper from '../docs/SportiverseHub.pdf';

const Docs = () => {

    return (
        <div class="Contact">
            <div className="menu-container2">
                <div className="logo-container">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                </div>
                <center>
                    <div className="logo-container2">
                        <Link className="no-effect" to="/">Home</Link>
                        <Link className="no-effect actual" to="/docs">Docs</Link>
                        <Link className="no-effect" to="/contact">Contact</Link>
                        <Link className="no-effect" to="/dapps">Dapps</Link>
                    </div>
                </center>
                <div className="profile-container">
                </div>
            </div>
            <div className="docs-container">
                <a className="no-effect" href={paper}>
                    <div className="docs-card">
                        <img src={litepaper} alt="Litepaper" className="docs-card-image" />
                        <div className="docs-card-title">Litepaper V1</div>
                    </div>
                </a>
            </div>
            <footer className="footer">
                <p>Created by Sportiverse Labs © {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
};

export default Docs;