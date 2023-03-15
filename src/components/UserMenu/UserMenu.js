import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import css from './UserMenu.module.css';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <span className={css.username}>{user.name}</span>
      <Button
        variant="contained"
        size="small"
        onClick={() => dispatch(logOut())}
        startIcon={<LogoutIcon />}
      >
        Logout
      </Button>
    </div>
  );
};
