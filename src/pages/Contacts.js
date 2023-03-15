import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';

import { ContactList } from '../components/Phonebook/ContactList';
import { ContactForm } from '../components/Phonebook/ContactForm';
import { Filter } from '../components/Phonebook/Filter';
import { Loader } from 'components/Loader/Loader';
import { ReactComponent as Lines } from '../images/lines.svg';
import styles from '../components/Phonebook/Phonebook.module.css';

export default function Contacts() {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <div className={styles.wrapper}>
        <Helmet>
          <title>Contacts</title>
        </Helmet>
        <div>
          <div className={styles.block}>
            <h1 className={styles.title}>Phonebook</h1>
            <ContactForm />
          </div>
          <div className={styles.block}>
            <h2 className={styles.title}>Contacts</h2>
            <Filter />
          </div>
        </div>
        <div className={styles.block_contacts}>
          {contacts.length > 0 ? (
            <div>
              <h2 className={styles.title}>Your contacts</h2>
              {isLoading && !error && <Loader />}
              <ContactList />
            </div>
          ) : (
            <div className={styles.wrapper_error}>
              <h2 className={styles.title_error}>
                You don't have any contacts...
              </h2>
              <Lines className={styles.error} />
            </div>
          )}
        </div>
      </div>
    </HelmetProvider>
  );
}
