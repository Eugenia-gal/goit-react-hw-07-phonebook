import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contacts, filter } from 'redux/phonebook/phonebook-slices';

const phonebookReducer = combineReducers({
  contacts,
  filter,
});

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export { store };
