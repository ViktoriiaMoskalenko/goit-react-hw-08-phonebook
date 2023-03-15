import { NavLink } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Button from '@mui/material/Button';
import { ReactComponent as Book } from '../images/book.svg';
import styles from '../components/Phonebook/Phonebook.module.css';
import routes from '../routes';
import Weather from '../components/Weather/WeatherApp';

export default function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Save Contacts</title>
      </Helmet>
      <div className={styles.home}>
        <Weather />
        <div className={styles.wrapper_phone}>
          <h2 className={styles.title}>Phonebook</h2>
          <Book className={styles.phone} />
          <NavLink
            to={routes.contacts}
            className={styles.button}
            title="Try it now!"
            aria-label="Go to contacts"
          >
            <Button variant="contained">Try it now</Button>
          </NavLink>
        </div>
      </div>
    </HelmetProvider>
  );
}
