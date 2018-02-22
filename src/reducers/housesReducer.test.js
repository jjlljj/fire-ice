/* eslint-disable */
import { housesReducer } from './housesReducer'
import * as actions from '../actions/index'
import { mockHouses, mockUpdatedHouses, mockCleanedHouses, mockMemberUrls } from '../__mocks__/mockData'

describe('housesReducer', () => {

  it('should return the default state', () => {
    expect(housesReducer(undefined, {})).toEqual([])
  })

  it('ADD_HOUSES should return the expected array of houses', () => {
    const expected = mockHouses
    const action = actions.addHouses(mockHouses)

    expect(housesReducer(undefined, action)).toEqual(expected)
  })

  it('ADD_MEMBERS_TO_HOUSE should return the expected array of houses, with members added to the house', () => {
    const action = actions.addMembersToHouse(mockMemberUrls, "House Dayne of Starfall")
    
    expect(housesReducer(mockCleanedHouses, action)).toEqual(mockUpdatedHouses)
  })
})