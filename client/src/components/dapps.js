import React from 'react';
import logo from '../imgs/logo.svg';
import faixa from '../imgs/faixa.png';
import fundoVideo from '../videos/fundo-futebol.mp4';
import { Routes, Route, Link } from 'react-router-dom';

import avatar1 from '../imgs/avatar/1.png';
import avatar2 from '../imgs/avatar/2.png';
import avatar3 from '../imgs/avatar/3.png';

import icon1 from '../imgs/icones/icon1.png'

import card1 from '../imgs/image-card/card1.png'
import card2 from '../imgs/image-card/card2.png'

const Dapps = () => {
    return (
        <div class="Home">
            <div class='container-geral'>
                <div className="menu-container dap">
                    <div className="logo-container">
                        <Link to="/">
                            <img src={logo} alt="Logo" className="logo" />
                        </Link>
                    </div>
                    <center>
                        <div className="logo-container2">
                            <Link className="no-effect" to="/">Home</Link>
                            <Link className="no-effect" to="/docs">Docs</Link>
                            <Link className="no-effect" to="/contacts">Contact</Link>
                            <Link className="no-effect actual" to="/dapps">Dapps</Link>
                        </div>
                    </center>
                    <div className="profile-container">
                    </div>
                </div>
                <div class="content-container dap">
                    <div class="section-wrapper spacing-xpad">
                        <div class="section section-left">
                            <h1 class="section-title dap">Blockchain that Scale</h1>
                            <p class="subtitle dap">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <button class="btn blue dap">Learn about AppChains</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-container dap2">
                <div class="text-content dap">
                    <h1 class="title dap">Exercise total control of your stack</h1>
                    <p class="subtitle dap">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div class="button-group">
                        <button class="btn blue">Make a Transferer</button>
                    </div>
                </div>
            </div>
            <div class="content-container dap3">
                <h1 class="title dap">Everythin a Blockchain needs, out of the box</h1>
                <div className="card-section dap">
                    <div className="info-card dap">
                        <img src={avatar1} className="imagem-dap" />
                        <div className='card-subsection'>
                            <div className='section-imageIcon'>
                                <img src={icon1} className="imagem-icon" />
                            </div>
                        </div>
                    </div>
                    <div className="info-card dap">
                        <img src={avatar2} className="imagem-dap" />
                        <div className='section-imageIcon'>
                            <img src={icon1} className="imagem-icon" />
                        </div>
                    </div>
                    <div className="info-card dap">
                        <img src={avatar3} className="imagem-dap" />
                        <div className='section-imageIcon'>
                            <img src={icon1} className="imagem-icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-container dap3 dap4">
                <h1 class="title dap">Everythin a Blockchain needs, out of the box</h1>
                <div className="card-section dap">
                    <div className="info-card dap2">
                        <h3 className="card-title dap">Security</h3>
                        <p className="card-text dap">Robust cryptographic protocols to protect your data.</p>
                    </div>
                    <div className="info-card dap2">
                        <h3 className="card-title dap">Scalability</h3>
                        <p className="card-text dap">Robust cryptographic protocols to protect your data.</p>
                    </div>
                </div>
                <div className="card-section dap dap2">
                    <div className="info-card dap2">
                        <h3 className="card-title dap">Security</h3>
                        <p className="card-text dap">Robust cryptographic protocols to protect your data.</p>
                    </div>
                    <div className="info-card dap2">
                        <h3 className="card-title dap">Scalability</h3>
                        <p className="card-text dap">Robust cryptographic protocols to protect your data.</p>
                    </div>
                </div>
            </div>
            <div class="content-container dap3 dap5">
                <h1 class="title dap">Everythin a Blockchain needs, out of the box</h1>
                <div className="card-section dap">
                    <div className="info-card dap3">
                        <img src={card1} className="imagem-dap2" />
                        <div className='card-subsection'>
                            <div className='section-imageIcon'>
                                <h3 className="card-title dap3">Scalability</h3>
                                <p className="card-text dap3">Robust cryptographic protocols to protect your data.</p>
                            </div>
                        </div>
                    </div>
                    <div className="info-card dap3">
                        <img src={card2} className="imagem-dap2" />
                        <div className='section-imageIcon'>
                            <h3 className="card-title dap3">Scalability</h3>
                            <p className="card-text dap3">Robust cryptographic protocols to protect your data.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dapps;