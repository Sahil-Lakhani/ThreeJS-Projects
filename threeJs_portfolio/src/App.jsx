import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
// import CustomCursor from './components/CustomCursor'

const App = () => {
  return (
    <main className='bg-black-100 min-h-screen'>
      {/* <CustomCursor /> */}
      <Navbar />
      <Hero />
    </main>
  )
}

export default App