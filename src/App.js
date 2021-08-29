// import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Container from 'Components/Container';
import Form from 'Components/Form';
import ContactList from 'Components/ContactList';
import Filter from 'Components/Filter';

// const useLocalStorage = (key, initialValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? initialValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// };

function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Toaster />
    </Container>
  );
}

export default App;
