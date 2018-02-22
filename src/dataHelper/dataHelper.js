export const fetchHouses = async () => {
  try {
    const url = "http://localhost:3001/api/v1/houses"
    const response = await fetch(url)

    if (response.status < 300 ) {
      return await response.json()
    }
    else {
      throw new Error('unable to fetch house data')
    }
  } catch(err) {
    throw(err)
  }
}