import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dapps from './dapps';
import Home from './Home';
import Contatos from './Contact'

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/dapps" element={<Dapps/>}/>
                        <Route path="/contacts" element={<Contatos/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;