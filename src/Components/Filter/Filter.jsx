import React from 'react';
import shortid from 'shortid';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as phonebookActions from 'redux/phonebook/phonebook-actions';
import { getFilter } from 'redux/phonebook/phonebook-selectors';
import FilterContainer from './Filter.styled';

const customId = shortid.generate();

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = event =>
    dispatch(phonebookActions.filterContacts(event.target.value));

  return (
    <FilterContainer>
      <label>
        Find contact by name
        <input
          id={customId}
          value={value}
          onChange={onChange}
          name="filter"
        ></input>
      </label>
    </FilterContainer>
  );
}

// -----------without Hooks----------------
// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };
//
// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });
//
// const mapDispatchToProps = dispatch => ({
//   onChange: event =>
//     dispatch(phonebookActions.filterContacts(event.target.value)),
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
