/** @format */

import { CardMedia } from "@mui/material";

const TodosHeader = ({ todoCount }) => {
  return (
    <CardMedia className='card-header'>
      <h3>Todos: {todoCount}</h3>
    </CardMedia>
  );
};

export default TodosHeader;
