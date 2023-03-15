import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import {addContact} from '../../redux/contacts/operations'
import { nanoid } from 'nanoid'
import styles from './Phonebook.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { notification } from '../Notification/Notification'
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export function ContactForm (){
  const contacts = useSelector(state => state.contacts.items);
   const [name, setName] = useState('');
  const [number, setNumber] = useState('');
    const dispatch = useDispatch();
  
    function hendleChange (event) {
    const { name, value } = event.currentTarget
        switch (name) {
          case 'name':
            setName(value)
            break;
          case 'number':
            setNumber(value)
            break;
        
          default:
            return;
        }
        
    }

  function hendleSubmit(event) {
    event.preventDefault()
    if (contacts.find(contact =>
      contact.name.toLowerCase() === name.toLowerCase()
    
    )) {
      notification('warning')()
      return
    }
    
    dispatch(addContact( {name, number} ))
    reset()
    notification('success')()
  }
  

      function reset () {
      setName('')
      setNumber('')
  }
    
        return (
          <form onSubmit={hendleSubmit} className={styles.form}>
            <TextField
          id={
          nanoid()
        }
          label="Name"
          variant="outlined"
          type="text"
              name="name"
              value={name}
              onChange={hendleChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
                        <TextField

          label="Number"
          variant="outlined"
          type="number"
              name="number"
              value={number}
              onChange={hendleChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}[0-9]*"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
        />
        <Button variant="contained" size="large" type="submit">
          Add contact
            </Button>
<NotificationContainer className={styles.notification_container}/>
          </form>

    )
}

ContactForm.prototype = {
  hendleSubmit:PropTypes.func.isRequired
}