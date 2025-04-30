import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dapps from './dapps';
import Home from './Home';
import Contatos from './Contact';
import Docs from './docs';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/dapps" element={<Dapps/>}/>
                        <Route path="/contact" element={<Contatos/>}/>
                        <Route path="/docs" element={<Docs/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;
