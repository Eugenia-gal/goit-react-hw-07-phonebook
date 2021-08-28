import React from 'react';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/phonebook/phonebook-slices';
import { getFilter } from 'redux/phonebook/phonebook-selectors';
import FilterContainer from './Filter.styled';

const customId = shortid.generate();

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = event => dispatch(filterContacts(event.target.value));

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
