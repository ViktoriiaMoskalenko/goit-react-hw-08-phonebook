import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from '../../redux/contacts/operations'
import { nanoid } from 'nanoid'
import styles from './Phonebook.module.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {

    const contacts = useSelector(state => state.contacts.items);
      const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  console.log(contacts)

      function onDelete(index) {
    dispatch(deleteContact(index))
      }
      function hendleFind() {
        const normalizedFilter = filters.toLowerCase();
          return (contacts.filter(contact =>
               contact.name.toLowerCase().includes(normalizedFilter)
    ))
      }
    
    const contactsData = hendleFind()
return (
            <ul className={styles.list}>
        {contactsData.map(({ name, number, id }, index) =>           
            <li key={nanoid()} className={styles.item}>
                        <span className={styles.item_span}>{name}: {number}</span>
                  <Button variant="outlined" startIcon={<DeleteIcon />} size="small" type="button" onClick={()=>onDelete(id)} key = {index}>
          Delete
        </Button>          
          </li>
                )}
             </ul>
         )
}

