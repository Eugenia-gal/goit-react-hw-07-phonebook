export const getItems = state => state.phonebook.contacts.items;
export const getFilter = state => state.phonebook.filter;
export const getStatus = state => state.phonebook.contacts.status;
export const getError = state => state.phonebook.contacts.error;

export const getVisibleContacts = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
