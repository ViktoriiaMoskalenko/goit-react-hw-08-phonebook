import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from '../../redux/contacts/operations'
import { nanoid } from 'nanoid'
import styles from './Phonebook.module.css'

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
            <ul>
        {contactsData.map(({ name, number, id }, index) =>           
            <li key={nanoid()} className={styles.item}>
                        <span>{name}: {number}</span>
                        <button type='button' className = {styles.item_btn} onClick={()=>onDelete(id)} key = {index}>Delete</button>
                    </li>
                )}
             </ul>
         )
}

