/* eslint-disable */
import * as actions from './index'
import { mockHouses } from '../__mocks__/mockData'

describe('actions', () => {

  it('addHouses should return a type of ADD_HOUSES with an array of Houses', () => {
    const expected = {
      type: 'ADD_HOUSES',
      houses: mockHouses
    }
    const action = actions.addHouses(mockHouses)

    expect(action).toEqual(expected)

  })
})