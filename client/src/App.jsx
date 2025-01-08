import React from 'react'
import { Button } from './components/ui/button'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Hero from './pages/student/HeroSection'
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero/>
      <Login />
    </main> 
  )
}

export default App