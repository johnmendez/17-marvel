// Create a reducer/modal.js reducer function
// When adding modal data replace the old modal description
// When clearing modal data set the modal state to null

 import { combineReducers } from 'redux';

 function modalSet(state = [], action) {
   switch (action.type) {
     case 'MODAL@SET':
       return action.data;
     default:
       return state;
   }
 }

 function modalClear(state = null, action) {
   switch (action.type) {
     case 'MODAL@CLEAR':
       return action.data;
     default:
       return state;
   }
 }


 export default combineReducers({
   modalSet,
   modalClear,
 });
