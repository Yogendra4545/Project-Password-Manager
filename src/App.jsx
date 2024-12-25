import { useState } from 'react'
import Navbar from './conponents/Navbar'
import Manager from './conponents/Manager'
import Footer from './conponents/Footer'
import './App.css'

function App() {
  

  return (
  <>
  <Navbar/>

<div className=" bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
  <Manager/>
  </div>
  <Footer/>
  </>
  )
}

export default App
