import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as phonebookActions from 'redux/phonebook/phonebook-actions';
// import PropTypes from 'prop-types';
import CustomForm from './Form.styled';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { id, value } = e.target;
    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { name: name, number: number };
    dispatch(phonebookActions.addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <CustomForm onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
        onChange={handleChange}
      />
      <label htmlFor="number">Phone</label>

      <input
        type="text"
        name="number"
        id="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={number}
        onChange={handleChange}
      />
      <button type="submit">Add Contact</button>
    </CustomForm>
  );
}

// ------------without Hooks -----------------
// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
// const mapDispatchToProps = dispatch => ({
//   onSubmit: data => dispatch(phonebookActions.addContact(data)),
// });

// export default connect(null, mapDispatchToProps)(Form);
