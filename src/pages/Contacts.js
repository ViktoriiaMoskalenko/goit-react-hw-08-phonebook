import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';

import { ContactList } from '../components/Phonebook/ContactList';
import { ContactForm } from '../components/Phonebook/ContactForm';
import { Filter } from '../components/Phonebook/Filter';
import styles from '../components/Phonebook/Phonebook.module.css';

export default function Contacts() {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Your tasks</title>
        </Helmet>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.title}>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </div>
    </HelmetProvider>
  );
}
