// Use combineReducers from redux to build your application reducer in reducer.js
// from the functions you've created
import { combineReducers } from 'redux';

import { series } from './reducers/series-info';
import { character } from './reducers/character-data';
import { comic } from './reducers/comic-data';
import { modalSet } from './reducers/modal';
import { modalClear } from './reducers/modal';

export default combineReducers({
  series,
  character,
  comic,
  modalSet,
  modalClear,
});
