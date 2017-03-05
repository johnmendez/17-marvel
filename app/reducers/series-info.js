import { combineReducers } from 'redux';

function series(state = [], action) {
  switch (action.type) {
    case 'SERIES_INFO@LOAD_COMPLETE':
      return action.data;
    default:
      return state;
  }
}
// Create a reducer/series-info.js reducer function
// When loading series info replace the old series info

export default combineReducers({
  series,
});
