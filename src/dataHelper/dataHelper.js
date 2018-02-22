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

export const cleanHouses = housesArray => {
  return housesArray.map(house => cleanHouse(house))
}

export const cleanHouse = ({ name, founded, seats, titles, coatOfArms,  ancestralWeapons, words, swornMembers }) => {
  return {
    Name: name,
    Founded: founded,
    Seats: arrayToString(seats),
    Titles: arrayToString(titles),
    "Coat Of Arms": coatOfArms,
    "Ancestral Weapons": arrayToString(ancestralWeapons),
    Words: words, 
    swornMembers
  }

}

export const arrayToString = array => {
  return array.join(", ")
}