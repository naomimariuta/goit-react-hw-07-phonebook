import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'reduxtoolkit/operations';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={styles.item}>
      {contact.name}: {contact.number}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ContactItem;
