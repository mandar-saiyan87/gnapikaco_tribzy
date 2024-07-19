import React from 'react'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/shared/Footer'


function App() {


  return (
    <>
      <div className='bg-mainbg w-full max-w-[1920px] min-h-screen m-auto'>
        <Homepage />
        <Footer />
      </div>
    </>
  )
}

export default App
