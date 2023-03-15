import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.login_title}>Log in to Phonebook</h2>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
        />
        <Button variant="contained" size="large" type="submit">
          Log In
        </Button>
      </form>
    </div>
  );
};
