/* eslint-disable */
import { housesReducer } from './housesReducer'
import * as actions from '../actions/index'
import { mockHouses } from '../__mocks__/mockData'

describe('housesReducer', () => {

  it('should return the default state', () => {
    expect(housesReducer(undefined, {})).toEqual([])
  })

  it('ADD_HOUSES should return the expected array of houses', () => {
    const expected = mockHouses
    const action = actions.addHouses(mockHouses)

    expect(housesReducer(undefined, action)).toEqual(expected)
  })
})