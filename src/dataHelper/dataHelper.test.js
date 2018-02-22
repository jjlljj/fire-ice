import { fetchHouses } from './dataHelper'
import { mockHouses } from '../__mocks__/mockData'

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
})