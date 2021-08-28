import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as phonebookActions from 'redux/phonebook/phonebook-actions';
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
            onClick={() => dispatch(phonebookActions.deleteContact(contact.id))}
          >
            Delete
          </button>
        </ListContactEl>
      ))}
    </CustomContactList>
  );
}

// ----------------without Hooks -----------------
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => {
//   const { items, filter } = state.contacts;
//   const normalizedFilter = filter.toLowerCase();
//   const visibleContacts = items.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
//   return {
//     contacts: visibleContacts,
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(phonebookActions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
