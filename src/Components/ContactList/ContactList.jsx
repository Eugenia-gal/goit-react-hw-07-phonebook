import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, deleteContact } from 'redux/phonebook/phonebook-slices';
import {
  getVisibleContacts,
  getStatus,
  getError,
} from 'redux/phonebook/phonebook-selectors';
import Loader from 'react-loader-spinner';
import CustomContactList from './ContactList.styled';
import ContactItem from 'Components/ContactItem/ContactItem';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <CustomContactList>
      {status === 'loading' && <Loader color="#757575" />}
      {status === 'error' && (
        <p>
          <b>Oopps...something went wrong: </b>
          {error}
        </p>
      )}
      {contacts &&
        !error &&
        contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </CustomContactList>
  );
}
