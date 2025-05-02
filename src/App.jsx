import React from 'react'
import Home from './components/Home'

function App() {
  return (
    <div className='flex flex-col min-h-screen items-center bg-gray-200 justify-center py-8 px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-gray-700 mb-2'>AI Image Enhancer</h1>
        <p className='text-lg text-gray-500'>upload image and let AI enhance it for you in just one click</p>
      </div>
      <Home/>
      <div className='text-lg text-gray-500 mt-6'>
        powerded by free API
      </div>
      
    </div>
  )
}

export default App