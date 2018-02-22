import { mockCleanedHouses, mockHouses } from '../../__mocks__/mockData'

export const fetchHouses = () => {
  fetch('mocked fetch houses')
  return mockHouses
}


export const cleanHouses = () => {
  return mockCleanedHouses
}

export const fetchSwornMembers = () => {
  return "Allyria Dayne, Allyria Dayne, Allyria Dayne"
}