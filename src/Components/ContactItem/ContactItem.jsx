import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { deleteContact } from 'redux/phonebook/phonebook-slices';
import ListContactEl from './ContactItem.styled';

function ContactItem({ contact }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    setIsDeleting(true);
    dispatch(deleteContact(contact.id));
  };
  return (
    <ListContactEl>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button type="button" onClick={handleDelete}>
        {isDeleting ? (
          <Loader type="Bars" color="#000000" height={12} width={12} />
        ) : (
          'Delete'
        )}
      </button>
    </ListContactEl>
  );
}

export default ContactItem;
