import { fetchHouses, cleanHouses, cleanHouse, arrayToString } from './dataHelper'
import { mockHouses, mockCleanedHouse, mockCleanedHouses } from '../__mocks__/mockData'

describe('dataHelper', () => {

  describe('fetchHouses', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockHouses)
      }))
    })

    it('should call fetch with the expected params', () => {
      const expected = "http://localhost:3001/api/v1/houses"
      
      expect(window.fetch).not.toHaveBeenCalled()

      fetchHouses()

      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('should return the expected response array', () => {
      const expected = mockHouses
      const response = fetchHouses()

      expect(response).resolves.toEqual(expected)

    })

    it('should handle errors if the response is not okay', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }))

      const response = fetchHouses()
      const expected = Error('unable to fetch house data')

      expect(response).rejects.toEqual(expected)
    })

  })

  describe('cleanHouses', () => {

    it('should return the expected array of cleaned house objects', () => {
      const result = cleanHouses(mockHouses)

      expect(result).toEqual(mockCleanedHouses)
    })
  })

  describe('cleanHouse', () => {

    it('should return the expected cleaned house object', () => {
      const result = cleanHouse(mockHouses[0])
      expect(result).toEqual(mockCleanedHouse)
    })
  })

  describe('mergeArray', () => {

    it('should take an array and return a string', () => {
      const array =[ 'my', 'name', 'is', 'james']
      const expected = 'my name is james'
      expect(arrayToString(array)).toEqual(expected)
    })
  })
})