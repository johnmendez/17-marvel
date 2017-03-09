// Use combineReducers from redux to build your application reducer in reducer.js
// from the functions you've created
import { combineReducers } from 'redux';

import seriesInfo from './reducers/series-info';
import characterData from './reducers/character-data';
import comicData from './reducers/comic-data';
import modal from './reducers/modal';
// import modalClear from './reducers/modal';

export default combineReducers({
  seriesInfo,
  characterData,
  comicData,
  modal,
  // modalClear,
});
