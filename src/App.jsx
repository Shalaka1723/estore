import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNav from './Components/TopNav/TopNav'
import CatNav from './Components/CatNav/Index'
import MainComponent from './Components/MainComponent/Index'

function App() {

  return (
    <>
      <TopNav/>
      <CatNav/>
      <MainComponent/>
    </>
  )
}

export default App
