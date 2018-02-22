import React, { Component } from 'react'
import './DisplayHouses.css'
import { connect } from 'react-redux'
import { fetchHouses, cleanHouses, fetchSwornMembers } from '../../dataHelper/dataHelper'
import { addHouses, addMembersToHouse } from '../../actions/index'
import Card from '../../components/Card/Card'
const wolf = require('./assets/wolf.gif')


export class DisplayHouses extends Component {

  componentDidMount = () => {
    try {
      this.fetchAndCleanCards()
    }
    catch(err) {
      console.log(err)
    }
  }

  fetchAndCleanCards = async () => {
    const houses = await fetchHouses()
    const cleanedHouses = cleanHouses(houses)
    this.props.addHouses(cleanedHouses)
  }

  getSwornMembers = async (swornMembers, members, houseName ) => {

    try {
      const memberNames = !members && await fetchSwornMembers(swornMembers) 

      !members && this.props.addMembersToHouse(memberNames, houseName)     
    }
    catch(err) {
      console.log(err)
    }
  }

  renderHouseCards = () => {
    const { houses } = this.props
    return houses.map(house => ( 
      <Card 
        house={house } 
        handleSworn={ this.getSwornMembers } 
        key={ house.Name }/> 
    ))
  }

  renderLoadingWolf = () => {
    return <img src={wolf} id="wolf" className="Display-info" />
  }

  render() {
    const { houses } = this.props

    return (
      <div className='Display-info Container'>
        { !houses.length &&
          this.renderLoadingWolf()
        }
        {
          this.renderHouseCards() 
        }
      </div>
    )
  }

}

const mapStateToProps = ({ houses }) => ({
  houses
})

const mapDispatchToProps = dispatch => ({
  addHouses: houses => dispatch(addHouses(houses)),
  addMembersToHouse: (members, houseName) => dispatch(addMembersToHouse(members, houseName))
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayHouses)