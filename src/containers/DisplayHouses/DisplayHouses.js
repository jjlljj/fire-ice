import React, { Component } from 'react';
import './DisplayHouses.css';
import { connect } from 'react-redux';
import { fetchHouses } from '../../dataHelper/dataHelper';

export class DisplayHouses extends Component {

  componentDidMount = async () => {
    try {
      const houses = await fetchHouses()
      console.log(houses)
    }
    catch (err) {
      console.log(err)
    }


  }

  render() {
    return (
      <div className='Display-info'>

      </div>
    )
  }

}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({

})

export default connect(undefined, undefined)(DisplayHouses)