import { useDispatch, useSelector } from "react-redux";
import{setStatusFilter } from '../../redux/contacts/filtersSlice'
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import styles from './Phonebook.module.css'

export function Filter(){

  const filters = useSelector(state => state.filters);
  
  const dispatch = useDispatch();
    
    function hendleFilter(event) {
             const {value} = event.target
       dispatch(setStatusFilter(value))
        
    }
  return (
    <div className={styles.filter}>
      <TextField
          id="outlined-basic"
          label="Find contacts by name"
          variant="outlined"
          type="text"
          name="filter"
          value={filters}
                    onChange={hendleFilter}
        />
    </div>
        )
}

Filter.prototype = {
    value:PropTypes.string.isRequired
}