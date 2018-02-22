import React from 'react'
import './Card.css'

export const Card = ({ house }) => {
  const { Name, Founded, Seats, Titles, CoatOfArms, AncestralWeapons } = house
  return (
    <div>
      <h2>{ Name }</h2>
      <h3>Founded: {Founded}</h3>
      <ul>
        <li>Seats: {Seats}</li>
        <li>Titles: {Titles} </li>
        <li>Coat of Arms: {CoatOfArms}</li>
        <li>Ancestral Weapons: {AncestralWeapons}</li>
      </ul>
    </div>
  )
}

export default Card