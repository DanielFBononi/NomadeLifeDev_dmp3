import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { useAuthentication } from './hooks/useAuthentication';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import { useEffect } from 'react';
import loading from '../public/loading.svg'

const loadingUser = user === undefined

useEffect(() => {
    onAuthStateChanged(auth,user => {
        setUser(user)
    })
}, [auth])

if (loadingUser) {
    return <div className='container load'><img src={loading} width="120px" height="120px" alt="Loading Blog"></img></div>
}

function App() {
    const { user, setUser } = useState(undefined)
    const { auth } = useAuthentication()


    return (
        <>
            <BrowserRouter>
                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/register' element={<Register />}></Route>
                        <Route path='/post/create' element={<CreatePost />}></Route>
                        <Route path='/dashboard' element={<Dashboard />}></Route>
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App