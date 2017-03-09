// Create a reducer/comic-data.js reducer function
// When loading comic data replace the old series info


export default function comic(state = [], action) {
  switch (action.type) {
    case 'COMICS@FIND_ALL_COMPLETE':
      return action.data;
    default:
      return state;
  }
}
