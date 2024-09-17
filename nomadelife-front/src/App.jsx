import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import {Footer} from  './components/Footer.jsx'
import {CreatePost} from './pages/CreatePost/CreatePost'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <CreatePost/>
      <Footer/>
    </>
  )
}

export default App
