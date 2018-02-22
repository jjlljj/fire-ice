export const fetchApi = async (url) => {
  try {
    const response = await fetch(url)

    if (response.status < 300 ) {
      return await response.json()
    }
    else {
      throw new Error('unable to fetch data')
    }
  } catch(err) {
    throw(err)
  }
}

export const fetchHouses = async () => {
  const url = "http://localhost:3001/api/v1/houses"
  return await fetchApi(url)
}

export const cleanHouses = housesArray => {
  return housesArray.map(house => cleanHouse(house))
}

export const cleanHouse = ({ name, founded, seats, titles, coatOfArms,  ancestralWeapons, words, swornMembers }) => {
  return {
    Name: name,
    Founded: founded,
    Seats: arrayToString(seats),
    Titles: arrayToString(titles),
    CoatOfArms: coatOfArms,
    AncestralWeapons: arrayToString(ancestralWeapons),
    Words: words, 
    swornMembers
  }

}

export const arrayToString = array => {
  return array.join(", ")
}

export const fetchSwornMembers = async swornMembers => {
  const membersArray = swornMembers.map(async memberUrl => {
    let member = await fetchApi(memberUrl)
    return member.name
  })

  return arrayToString(await Promise.all(membersArray))
}