import React from 'react';
import logo from '../imgs/logo.svg';
import faixa from '../imgs/faixa.png';
import fundoVideo from '../videos/fundo-futebol.mp4';
import { Routes, Route, Link } from 'react-router-dom';

const Home = () => {
    return (

        <div class="Home">
            <div class='container-video'>
                <video className="bg-video" autoPlay muted loop playsInline>
                    <source src={fundoVideo} type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
                <div className="menu-container">
                    <div className="logo-container">
                        <Link to="/">
                            <img src={logo} alt="Logo" className="logo" />
                        </Link>
                    </div>
                    <center>
                        <div className="logo-container2">
                            <Link className="no-effect actual" to="/">Home</Link>
                            <Link className="no-effect" to="/docs">Docs</Link>
                            <Link className="no-effect" to="/contact">Contact</Link>
                            <Link className="no-effect" to="/dapps">Dapps</Link>
                        </div>
                    </center>
                    <div className="profile-container">
                    </div>
                </div>
                <div class="content-container">

                    <div class="text-content">
                        <h1 class="title">Sportiverse is here!</h1>
                        <p class="subtitle">The blockchain infrastructure designed to revolutionize sports applications.</p>
                        <div class="button-group">
                            <button class="btn blue">Explore</button>
                            <button class="btn gray">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
            <img class='faixa' src={faixa} />
            <div class="section-general">
                <div class="section-wrapper spacing-xl">
                    <div class="section section-left">
                        <h1 class="section-title">Why build with Sportiverse?</h1>
                        <p class="section-subtitle">Designed for real-world sports use cases. Powered by Cosmos SDK.
                        Efficient. Scalable. Admin-free.</p>
                        <button class="btn blue">Learn about Sportiverse</button>
                    </div>
                </div>

                <div class="section-wrapper spacing-xt">
                    <div class="section section-right">
                        <h1 class="section-title">Blockchain that scale</h1>
                        <p class="section-subtitle">Build sports-focused Dapps without limits.
                        Powered by Cosmos SDK for maximum performance and interoperability.</p>
                        <button class="btn blue">Learn about Dapps</button>
                    </div>
                </div>
            </div>
            <div class="section-design">
                <div class="section-wrapper spacing-lg">
                    <div class="section section-right">
                        <h1 class="section-title2">A blockchain infrastructure for creators and communities</h1>
                        <p class="section-subtitle"> Sportiverse uses the Cosmos SDK to provide full sovereignty, speed, and modularity.
                        Our network is optimized for the real demands of sports-related applications — from social networks and fantasy games to fan tokens and athlete contracts.</p>
                    </div>
                </div>

                <div class="section-wrapper spacing-right">
                    <div class="section section-right">
                        <p class="section-subtitle centered">+ Built with Cosmos SDK</p>
                    </div>
                </div>
                <div className="section-wrapper spacing-right">
                    <div className="section section-right">
                        <center>
                            <p className="section-subtitle">+ Fully autonomous — no central admins</p>
                        </center>
                    </div>
                </div>
                <div className="section-wrapper spacing-right">
                    <div className="section section-right">
                        <center>
                            <p className="section-subtitle">+ Low latency and high throughput</p>
                        </center>
                    </div>
                </div>
                <div className="section-wrapper spacing-right">
                    <div className="section section-right">
                        <center>
                            <p className="section-subtitle">+ Cross-border payments with IBC</p>
                        </center>
                    </div>
                </div>
                <div className="section-wrapper spacing-right">
                    <div className="section section-right">
                        <center>
                            <p className="section-subtitle">+ Fees in ATOM, but native token support</p>
                        </center>
                    </div>
                </div>
            </div>
            <div className="card-section">
                <div className="info-card">
                    <h3 className="card-title">Explore</h3>
                    <p className="card-text">Build with full sovereignity and customize your chain.</p>
                    <p className="card-text">Learn More +</p>
                </div>
                <div className="info-card">
                    <h3 className="card-title">View</h3>
                    <p className="card-text">Discover Dapps built on Sportiverse.</p>
                    <p className="card-text">Learn More +</p>
                </div>
                <div className="info-card">
                    <h3 className="card-title">Read</h3>
                    <p className="card-text">Understand the architeture and start building.</p>
                    <p className="card-text">Learn More +</p>
                </div>
            </div>

            <footer className="footer">
                <p>Created by Sportiverse Labs © {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
};

export default Home;
