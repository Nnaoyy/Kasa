import Header from './components/header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer.jsx'

import './App.scss'


function App() {
  

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
