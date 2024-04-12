import { useState } from 'react'
import Home from './pages/home.jsx'
import './App.css'
import Header from './components/header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
