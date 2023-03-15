import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styles from './RegisterForm.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.register_title}>Create your account</h2>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
        />
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
          Register
        </Button>
      </form>
    </div>
  );
};
