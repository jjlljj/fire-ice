import React from 'react'
import './Card.css'

export const Card = ({ house, handleSworn }) => {
  const { Name, Founded, Seats, Titles, CoatOfArms, AncestralWeapons, swornMembers, members } = house
  const renderMembers = () => (<li>Sworn Members: { members } </li>)

  return (
    <div className="Card"
      onClick={() => handleSworn(swornMembers, members, Name)}>
      <h2>{ Name }</h2>
      <h3>Founded: {Founded}</h3>
      <ul>
        <li>Seats: {Seats}</li>
        <li>Titles: {Titles} </li>
        <li>Coat of Arms: {CoatOfArms}</li>
        <li>Ancestral Weapons: {AncestralWeapons}</li>
        {
          members &&
          renderMembers()
        }
      </ul>
    </div>
  )
}

export default Card