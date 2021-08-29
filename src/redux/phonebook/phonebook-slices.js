import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import shortid from 'shortid';
import axios from 'axios';
import { toast } from 'react-hot-toast';
// import initialContacts from 'Data/contacts.json';

const itemsInitialState = { items: [], status: null, error: null };
const filterInitialState = '';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const result = await axios.get(
      'https://6129fa91068adf001789b9d3.mockapi.io/contacts',
    );
    return result.data;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    const result1 = await axios.get(
      'https://6129fa91068adf001789b9d3.mockapi.io/contacts',
    );
    const contactNames = result1.data.map(contact => contact.name);
    const isRepeat = contactNames.indexOf(newContact.name) !== -1;

    if (isRepeat) {
      toast.error(`${newContact.name} is already in Contacts`);
      return;
    } else {
      const result = await axios.post(
        'https://6129fa91068adf001789b9d3.mockapi.io/contacts',
        newContact,
      );
      console.log(result.data);
      return result.data;
    }
  },
);

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  const result = await axios.delete(
    `https://6129fa91068adf001789b9d3.mockapi.io/contacts/${id}`,
  );

  return result.data;
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: itemsInitialState,
  extraReducers: {
    [getContacts.fulfilled]: (state, { payload }) => ({
      ...state,
      items: payload,
      status: null,
      error: null,
    }),
    [getContacts.pending]: (state, _) => ({
      ...state,
      status: 'loading',
      error: null,
    }),
    [getContacts.rejected]: (state, { error }) => ({
      ...state,
      status: 'error',
      error: error.message,
    }),
    [addContact.fulfilled]: (state, { payload }) => {
      if (payload) {
        toast.success(`Контакт ${payload.name} добавлен`);
        return {
          ...state,
          items: [...state.items, payload],
          status: null,
          error: null,
        };
      }
      return state;
    },
    [addContact.pending]: (state, _) => ({
      ...state,
      status: 'adding',
      error: null,
    }),
    [addContact.rejected]: (state, { error }) => ({
      ...state,
      status: 'error',
      error: error.message,
    }),
    [deleteContact.fulfilled]: (state, { payload }) => {
      toast.success(`Контакт ${payload.name} удален`);
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== payload.id),
        status: null,
        error: null,
      };
    },
    [deleteContact.pending]: (state, _) => ({
      ...state,
      status: 'deleting',
      error: null,
    }),
    [deleteContact.rejected]: (state, { error }) => ({
      ...state,
      status: 'error',
      error: error.message,
    }),
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

const contacts = contactsSlice.reducer;
const filter = filterSlice.reducer;

// export const { addContact, deleteContact } = contactsSlice.actions;
export const { filterContacts } = filterSlice.actions;
export { contacts, filter };
