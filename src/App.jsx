import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>

      <div className='header bg-dark text-white'>
        <div className="row">
          <div className="brand my-1">
            <h1>estore</h1>
          </div>
          <div className="inp-container p-0 my-4 w-50 h-25 bg-white">
            <input className="form-control" placeholder='Search...' />
            <button><i className="fa fa-search"></i></button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
