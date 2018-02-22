import React from 'react'
import logo from './logo.svg'
import './App.css'
import DisplayHouses from '../../containers/DisplayHouses/DisplayHouses'

export const App = () => {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Welcome to Westeros</h2>         
      </div>      
      <DisplayHouses />
    </div>
  )
}

export default App