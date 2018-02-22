import React, { Component } from 'react'
import './DisplayHouses.css'
import { connect } from 'react-redux'
import { fetchHouses, cleanHouses } from '../../dataHelper/dataHelper'
import { addHouses } from '../../actions/index'
import Card from '../../components/Card/Card'

export class DisplayHouses extends Component {

  componentDidMount = async () => {
    try {
      const houses = await fetchHouses()
      const cleanedHouses = cleanHouses(houses)
      this.props.addHouses(cleanedHouses)
    }
    catch (err) {
      console.log(err)
    }
  }

  renderHouseCards = () => {
    const { houses } = this.props
    return houses.map(house => ( <Card house={house } /> ))
  }

  render() {
    return (
      <div className='Display-info'>
        { this.renderHouseCards() }
      </div>
    )
  }

}

const mapStateToProps = ({ houses }) => ({
  houses
})

const mapDispatchToProps = dispatch => ({
  addHouses: houses => dispatch(addHouses(houses))
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayHouses)