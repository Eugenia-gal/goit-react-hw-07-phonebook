import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from 'redux/phonebook/phonebook-actions';

const itemsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const contactNames = state.map(contact => contact.name);
    const isRepeat = contactNames.indexOf(payload.name) !== -1;

    if (isRepeat) {
      alert(`${payload.name} is already in Contacts`);
      return state;
    }
    return [payload, ...state];
  },
  [actions.deleteContact]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },
});

const filterReducer = createReducer('', {
  [actions.filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

// ------------------without Redux Toolkit-----------------------
//
// import { combineReducers } from 'redux';
// import * as actionTypes from 'redux/phonebook/phonebook-types';
// // import initialContacts from 'Data/contacts.json';

// const itemsReducer = (
//   state = JSON.parse(window.localStorage.getItem('contacts')) ?? [],
//   { type, payload },
// ) => {
//   switch (type) {
//     case actionTypes.ADD_CONTACT: {
//       const contactNames = state.map(contact => contact.name);
//       const isRepeat = contactNames.indexOf(payload.name) !== -1;

//       if (isRepeat) {
//         alert(`${payload.name} is already in Contacts`);
//         return state;
//       }

//       window.localStorage.setItem(
//         'contacts',
//         JSON.stringify([payload, ...state]),
//       );
//       return [payload, ...state];
//     }
//     case actionTypes.DELETE_CONTACT: {
//       const newState = state.filter(contact => contact.id !== payload);
//       window.localStorage.setItem('contacts', JSON.stringify([...newState]));
//       return newState;
//     }
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.FILTER_CONTACT: {
//       return payload;
//     }
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });
