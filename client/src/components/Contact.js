import React from 'react';
import logo from '../imgs/logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import victor from '../imgs/victor.png';
import daniel from '../imgs/daniel.png';
import pedro from '../imgs/pedro.png';
import luca from '../imgs/luca.png';
import joao from '../imgs/joao.png';


const Contact = () => {

    const teamMembers = [
        {
            name: "Daniel Gonçalves",
            role: "Business Analyst",
            img: daniel,
            github: "https://github.com/odanielaugusto",
            linkedin: "https://www.linkedin.com/in/danielaraujogonncalves/"
        },
        {
            name: "Pedro Jorge",
            role: "UI/UX Designer",
            img: pedro,
            github: "https://github.com/PedroJorgeSA",
            linkedin: "https://www.linkedin.com/in/pedro-jorge-alves/"
        },
        {
            name: "Victor Garcia",
            role: "Blockchain Engineer",
            img: victor,
            github: "https://github.com/CryptoVictor",
            linkedin: "https://www.linkedin.com/in/victor-garcia-dos-santos/"
        },
        {
            name: "Luca Fortes",
            role: "Product Manager",
            img: luca,
            github: "https://github.com/lucafortes7",
            linkedin: "https://www.linkedin.com/in/lucafortes7/"
        },
        {
            name: "João Pedro",
            role: "FullStack Developer",
            img: joao,
            github: "https://github.com/joaoaraujo2006",
            linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro-gon%C3%A7alves-corr%C3%AAa-araujo-63339a2a3/"
        },
    ];

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
                        <Link className="no-effect" to="/docs">Docs</Link>
                        <Link className="no-effect actual" to="/contact">Contact</Link>
                        <Link className="no-effect" to="/dapps">Dapps</Link>
                    </div>
                </center>
                <div className="profile-container">
                </div>
            </div>
            <div className="contact-container">
                {teamMembers.map((member, index) => (
                    <div className="card" key={index}>
                        <img src={member.img} alt={`Photo of ${member.name}`} className="card-img" />
                        <h2 className="card-name">{member.name}</h2>
                        <p className="card-role">{member.role}</p>
                        <div className="social-icons">
                            <a href={member.github} target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <footer className="footer">
                <p>Created by Sportiverse Labs © {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
};

export default Contact;