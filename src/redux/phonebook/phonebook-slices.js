import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';
import initialContacts from 'Data/contacts.json';

// const itemsInitialState = { items: [] };
const filterInitialState = '';

const itemsSlice = createSlice({
  name: 'items',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        const contactNames = state.map(contact => contact.name);
        const isRepeat = contactNames.indexOf(payload.name) !== -1;

        if (isRepeat) {
          alert(`${payload.name} is already in Contacts`);
          return state;
        }
        return [payload, ...state];
      },
      prepare: newContact => {
        const id = shortid.generate();
        return { payload: { id, ...newContact } };
      },
    },

    deleteContact(state, { payload }) {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContacts(_, { payload }) {
      return payload;
    },
  },
});

const items = itemsSlice.reducer;
const filter = filterSlice.reducer;

export const { addContact, deleteContact } = itemsSlice.actions;
export const { filterContacts } = filterSlice.actions;
export { items, filter };
