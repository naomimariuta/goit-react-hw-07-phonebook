import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'reduxtoolkit/operations';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleAddContact = () => {
    if (name.trim() && number.trim()) {
      dispatch(addContact({ name, number }));
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={styles.container} onSubmit={e => e.preventDefault()}>
      <label className={styles.label}>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label className={styles.label}>
        Number:
        <input
          type="tel"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleAddContact}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
