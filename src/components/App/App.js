import React, { Component } from 'react'
import PropTypes, { shape, func, string } from 'prop-types'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import DisplayHouses from '../../containers/DisplayHouses/DisplayHouses'

export class App extends Component {

  render() {
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
}

App.propTypes = {
  
}

const mapStateToProps = ( { houses } ) => ({  
  houses
})

const mapDispatchToProps = dispatch => ({ 
})

export default connect(mapStateToProps)(App)
