/** @format */
import { FaTrashAlt } from "react-icons/fa";
import TodoItems from "./components/todo-items";
import TodoFooter from "./components/todos-footer";
import TodoHeader from "./components/todos-header";
import TodoForm from "./components/todos-form";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStore } from "./action/todo";
import { Card, CardContent, Paper } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const todoCount = useSelector((state) => state.todos)?.length;
  const todos = JSON.parse(localStorage.getItem("todos"));

  useEffect(() => {
    dispatch(getStore(todos));
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <Card className='mt-4'>
            <TodoHeader todoCount={todoCount} />
            <TodoForm />
            <hr className='m-0' />
            <TodoItems />
            <TodoFooter />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
