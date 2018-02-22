/* eslint-disable */
import React from 'react'
import { shallow } from 'enzyme'
import { DisplayHouses } from './DisplayHouses'
import { mockCleanedHouses } from '../../__mocks__/mockData'

jest.mock('../../dataHelper/dataHelper')

describe('DisplayHouses', () => {
  let renderedComponent
  let mockAddHouses
  let mockAddMembersToHouse

  beforeEach(() => {
    mockAddHouses = jest.fn()
    mockAddMembersToHouse = jest.fn()
    window.fetch = jest.fn()

    renderedComponent = shallow(
      <DisplayHouses 
        addHouses={ mockAddHouses }
        addMembersToHouse={ mockAddMembersToHouse }
        houses={ mockCleanedHouses }
        />
    )
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should call the fetch in fetchAndCleanCards on mount', () => {
    expect(window.fetch).toHaveBeenCalledWith('mocked fetch houses')
  })

  it('fetchAndCleanCards should call the fetch in fetchHouses', () => {
    window.fetch = jest.fn()

    expect(window.fetch).not.toHaveBeenCalled()

    renderedComponent.instance().fetchAndCleanCards()

    expect(window.fetch).toHaveBeenCalledWith('mocked fetch houses')
  })

  it('fetchAndCleanCards should dispatch the action addHouses', async () => {
    mockAddHouses = jest.fn()
    renderedComponent = shallow(
      <DisplayHouses 
        addHouses={ mockAddHouses }
        addMembersToHouse={ mockAddMembersToHouse }
        houses={ mockCleanedHouses }
        />
    )

    expect(mockAddHouses).not.toHaveBeenCalled()

    renderedComponent.instance().fetchAndCleanCards()

    expect(await mockAddHouses).toHaveBeenCalledWith(mockCleanedHouses)
  })

  it('getSwornMembers should call the fetch in fetchSwornMembers', () => {
    renderedComponent = shallow(
      <DisplayHouses 
        addHouses={ mockAddHouses }
        addMembersToHouse={ mockAddMembersToHouse }
        houses={ [] }
        />
    )

    expect(window.fetch).not.toHaveBeenLastCalledWith('mocked fetch sworn members')

    renderedComponent.instance().getSwornMembers()

    expect(window.fetch).toHaveBeenLastCalledWith('mocked fetch sworn members')
  })

  it('getSwornMembers should dispatch the addMembersToHouse action', async () => {
    renderedComponent = shallow(
      <DisplayHouses 
        addHouses={ mockAddHouses }
        addMembersToHouse={ mockAddMembersToHouse }
        houses={ [] }
        />
    )

    expect(mockAddMembersToHouse).not.toHaveBeenCalled()

    renderedComponent.instance().getSwornMembers()

    expect(await mockAddMembersToHouse).toHaveBeenCalled()
  })

})