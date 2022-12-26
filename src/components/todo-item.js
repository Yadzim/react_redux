/** @format */
import { useRef } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { isDone, removeTodo } from "../action/todo";
import {
  Button,
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import moment from "moment/moment";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const checkRef = useRef(null);

  const handleIsDone = (e) => {
    const date = new Date().valueOf()
    dispatch(
      isDone({
        id: todo.id,
        text: todo.text,
        isDone: e.target.checked,
        date
      })
    );
  };

  return (
    <ListItem
    divider
      secondaryAction={
        <Button
          variant='contained'
          color='secondary'
          size='large'
          onClick={() => dispatch(removeTodo(todo.id))}>
          <FaTrashAlt />
        </Button>
      }
      disablePadding>
      <ListItemButton>
        <ListItemIcon className='d-flex justify-content-between align-items-center'>
          <Checkbox
            defaultChecked={todo.isDone}
            checked={todo.isDone}
            ref={checkRef}
            onChange={handleIsDone}
            className='me-2'
          />
          <ListItemText
            className={`${todo.isDone ? "text-decoration-line-through" : ""}`}
            primary={<><p>{todo.text}</p> <span>{moment(todo.date).format("HH:mm:ss")+":"+moment(todo.date).millisecond()}</span></>}
          />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;
