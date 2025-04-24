import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;
