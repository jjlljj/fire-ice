export const addHouses = houses => ({
  type: 'ADD_HOUSES',
  houses
})

export const addMembersToHouse = (members, houseName) => ({
  type: 'ADD_MEMBERS_TO_HOUSE',
  members,
  houseName
})