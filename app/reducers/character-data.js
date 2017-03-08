// Create a reducer/character-data.js reducer function
// When loading character data replace the old series info


export default function character(state = [], action) {
  switch (action.type) {
    case 'CHARACTERS@FIND_ALL_COMPLETE':
      return action.data;
    default:
      return state;
  }
}
