import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {NavBar} from './components/NavBar';
import {Footer} from './components/Footer';
import {Login} from './pages/Login/Login';
import {Home} from './pages/Home/Home';
import {Register} from './pages/Register/Register';

function App() {
const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <NavBar />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
