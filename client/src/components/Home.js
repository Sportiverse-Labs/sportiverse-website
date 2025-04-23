import React from 'react';
import logo from '../imgs/logo.svg';
import faixa from '../imgs/faixa.png';
import { Routes, Route, Link } from 'react-router-dom';

const Home = () => {
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
                        <Link className="no-effect" to="/docs">Docs</Link>
                        <Link className="no-effect" to="/contacts">Contact</Link>
                        <Link className="no-effect" to="/dapps">Dapps</Link>
                        <Link className="no-effect" to="/roadmap">Roadmap</Link>
                    </div>
                </center>
                <div className="profile-container">
                </div>
            </div>
            <div class="content-container">
                <div class="text-content">
                    <h1 class="title">Sportiverse is here!</h1>
                    <p class="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div class="button-group">
                        <button class="btn blue">Start</button>
                        <button class="btn gray">Learn more</button>
                    </div>
                </div>
            </div>

            <div class="section-wrapper spacing-xl">
                <div class="section section-left">
                    <h1 class="section-title">Blockchain that Scale</h1>
                    <p class="section-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button class="btn blue">Learn about AppChains</button>
                </div>
            </div>

            <div class="section-wrapper spacing-xl">
                <div class="section section-right">
                    <h1 class="section-title">Blockchain that Scale</h1>
                    <p class="section-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button class="btn blue">Learn about AppChains</button>
                </div>
            </div>

            <div class="section-wrapper spacing-lg">
                <div class="section section-right">
                    <h1 class="section-title2">Design to spec, at internet scale</h1>
                    <p class="section-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button class="btn white">Learn about AppChains</button>
                </div>
            </div>

            <div class="section-wrapper">
                <div class="section section-right">
                    <p class="section-subtitle centered">+ Build with full sovereignty, from choice of validators to customizing your runtime.</p>
                </div>
            </div>
            <div className="section-wrapper">
                <div className="section section-right">
                    <center>
                        <p className="section-subtitle">+ Build with full sovereignty, from choice of validators to customizing your runtime.</p>
                    </center>
                </div>
            </div>
            <div className="section-wrapper">
                <div className="section section-right">
                    <center>
                        <p className="section-subtitle">+ Build with full sovereignty, from choice of validators to customizing your runtime.</p>
                    </center>
                </div>
            </div>
            <div className="section-wrapper">
                <div className="section section-right">
                    <center>
                        <p className="section-subtitle">+ Build with full sovereignty, from choice of validators to customizing your runtime.</p>
                    </center>
                </div>
            </div>
            <div className="section-wrapper">
                <div className="section section-right">
                    <center>
                        <p className="section-subtitle">+ Build with full sovereignty, from choice of validators to customizing your runtime.</p>
                    </center>
                </div>
            </div>
            <div className="card-section">
                <div className="info-card">
                    <h3 className="card-title">Security</h3>
                    <p className="card-text">Robust cryptographic protocols to protect your data.</p>
                </div>
                <div className="info-card">
                    <h3 className="card-title">Scalability</h3>
                    <p className="card-text">Optimized for high throughput and low latency.</p>
                </div>
                <div className="info-card">
                    <h3 className="card-title">Interoperability</h3>
                    <p className="card-text">Seamlessly connect with multiple blockchains.</p>
                </div>
            </div>
            <footer className="footer">
                <p>Created by Sportiverse Labs © {new Date().getFullYear()}</p>
            </footer>
        </div >
    );
};

export default Home;