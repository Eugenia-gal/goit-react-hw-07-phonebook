import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phonebook/phonebook-slices';
import { getVisibleContacts } from 'redux/phonebook/phonebook-selectors';
import styled from '@emotion/styled/macro';
import CustomContactList from './ContactList.styled';

const ListContactEl = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <CustomContactList>
      {contacts.map(contact => (
        <ListContactEl key={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </ListContactEl>
      ))}
    </CustomContactList>
  );
}
