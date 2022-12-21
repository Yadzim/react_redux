/** @format */
import { useSelector } from "react-redux";
import TodoItem from "./todo-item";
import { ImFilesEmpty } from "react-icons/im";
import { CardContent, List } from "@mui/material";

const TodoItems = () => {
  const data = useSelector((state) => state.todos);

  const sortTodo = (a,b) => {
    // if(a.isDone > b.isDone) return 1
    // if(a.date > b.date) return 2
    // return 0
  }

  return (
    <CardContent>
      <List>
        {data?.length ? (
          data.sort((a,b) => a.isDone - b.isDone).map((item) => <TodoItem key={item.id} todo={item} />)
        ) : (
          <div className='d-flex align-items-center flex-column my-4 text-secondary'>
            <ImFilesEmpty size={24} />
            <p className='m-0 mt-2'> Not todo</p>
          </div>
        )}
      </List>
    </CardContent>
  );
};

export default TodoItems;
