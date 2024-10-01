import React, { useEffect } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
// import CustomCursor from './components/CustomCursor'

const App = () => {
  useEffect(() => {
    const setVH = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);

    return () => window.removeEventListener('resize', setVH);
  }, []);

  return (
    <main className='bg-black-100 min-h-screen relative'>
      {/* <CustomCursor /> */}
      <Navbar />
      <Hero />
    </main>
  )
}

export default App