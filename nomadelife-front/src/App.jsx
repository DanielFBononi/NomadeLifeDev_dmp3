<<<<<<< HEAD
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
=======
import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CreatePost from './pages/CreatePost/CreatePost'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import { Register } from './pages/Register/Register'
import { useState } from 'react'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/Register' element={<Register/>}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
>>>>>>> a48cf12a17b319bfc71cb577f5c05faf9bc4f218
}

export default App;
