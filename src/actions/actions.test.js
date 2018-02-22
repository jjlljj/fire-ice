/* eslint-disable */
import * as actions from './index'
import { mockHouses, mockMemberUrls } from '../__mocks__/mockData'

describe('actions', () => {

  it('addHouses should return a type of ADD_HOUSES with an array of Houses', () => {
    const expected = {
      type: 'ADD_HOUSES',
      houses: mockHouses
    }
    const action = actions.addHouses(mockHouses)

    expect(action).toEqual(expected)

  })

  it('addMembersToHouse should return a typeof ADD_MEMBERS_TO_HOUSE with a houseName and an array of member urls', () => {
    const expected = {
      type: 'ADD_MEMBERS_TO_HOUSE',
      members: mockMemberUrls,
      houseName: "House Dayne of Starfall"
    }
    const action = actions.addMembersToHouse(mockMemberUrls, "House Dayne of Starfall")

    expect(action).toEqual(expected)
  })
})