import React from 'react'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'


function App() {


  return (
    <>
      <div className='bg-mainbg w-full max-w-[1920px] min-h-screen m-auto relative lg:px-7 lg:py-9'>
        <Navbar />
        <Homepage />
        <Footer />
      </div>
    </>
  )
}

export default App
