/* eslint-disable */
import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'
import { mockCleanedHouse } from '../../__mocks__/mockData'

describe('Card', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<Card house={ mockCleanedHouse }/>)
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should match snapshot when passed house members', () => {
    const houseWithMembers = { ...mockCleanedHouse, members: "Charlie, Dee, Dennis, Mac" }

    renderedComponent = shallow(<Card house={ houseWithMembers }/>)
    expect(renderedComponent).toMatchSnapshot()
  })

})