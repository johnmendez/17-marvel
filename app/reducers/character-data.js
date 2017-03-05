// Create a reducer/character-data.js reducer function
// When loading character data replace the old series info

import { combineReducers } from 'redux';

function character(state = [], action) {
  switch (action.type) {
    case 'CHARACTER@FIND_ALL_COMPLETE':
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  character,
});
