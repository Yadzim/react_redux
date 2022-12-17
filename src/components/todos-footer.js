/** @format */

import { Button, CardActions } from "@mui/material";
import { useSelector } from "react-redux";
import {FaDatabase} from 'react-icons/fa'

const TodoFooter = () => {

  const todos = useSelector(state => state.todos);

  const handleSave = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  return (
    <CardActions className='card-header py-3'>
      <Button variant="contained" color="success" size="large" onClick={handleSave} > <FaDatabase/> &nbsp; Save Storage</Button>
    </CardActions>
  );
};

export default TodoFooter;