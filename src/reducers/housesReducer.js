export const housesReducer = (state=[], action) => {
  switch (action.type) {
  case 'ADD_HOUSES':
    return action.houses
  case 'ADD_MEMBERS_TO_HOUSE': //eslint-disable-line
    const housesWithAdded = state.map(house => {
      if (house.Name === action.houseName) {
        return { ...house, members: action.members }
      }
      return house
    })
    return housesWithAdded
  default:
    return state
  }
}
