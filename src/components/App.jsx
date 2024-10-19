import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { selectFilter } from 'reduxtoolkit/selectors';
import styles from './App.module.css';

const App = () => {
  const filter = useSelector(selectFilter);

  return (
    <div className={styles.container}>
      <h1>PhoneBook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter filter={filter} />
      <ContactList />
    </div>
  );
};

export default App;
