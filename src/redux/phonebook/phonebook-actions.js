import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction('contacts/ADD_CONTACT', newContact => ({
  payload: { id: shortid.generate(), ...newContact },
}));
export const deleteContact = createAction('contacts/DELETE_CONTACT');
export const filterContacts = createAction('contacts/FILTER_CONTACT');

// ------------------without Redux Toolkit-----------------------
//
// import * as actionTypes from 'redux/phonebook/phonebook-types';
// import shortid from 'shortid';

// export const addContact = newContact => ({
//   type: actionTypes.ADD_CONTACT,
//   payload: { id: shortid.generate(), ...newContact },
// });

// export const deleteContact = id => ({
//   type: actionTypes.DELETE_CONTACT,
//   payload: id,
// });

// export const filterContacts = text => ({
//   type: actionTypes.FILTER_CONTACT,
//   payload: text,
// });
