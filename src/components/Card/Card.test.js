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

})