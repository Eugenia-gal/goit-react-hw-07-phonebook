import { createSelector } from 'reselect';

export const getItems = state => state.phonebook.contacts.items;
export const getFilter = state => state.phonebook.filter;
export const getStatus = state => state.phonebook.contacts.status;
export const getError = state => state.phonebook.contacts.error;

export const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);
