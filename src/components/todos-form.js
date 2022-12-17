/** @format */
import { Button, CardContent } from "@mui/material";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../action/todo";

const TodoForm = () => {
  const inputRef = useRef(null);
  const formRef = useRef(null);
  const dispach = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (String(inputRef.current.value).trim().length > 0) {
      dispach(
        addTodo({
          text: inputRef.current.value,
          id: uuidv4(),
          isDone: false,
        })
      );
    }
    formRef.current.reset();
  };

  return (
    <CardContent>
      <form
        className='my-2 d-flex justify-content-between'
        onSubmit={handleSubmit}
        ref={formRef}>
        <input
          ref={inputRef}
          type='text'
          placeholder='Enter todo'
          className='form-control w-75'
        />
        <Button type="submit" variant='contained'>Add</Button>
      </form>
    </CardContent>
  );
};

export default TodoForm;
