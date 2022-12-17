import { todoActiontype } from "../constants/todoActionType"

export const addTodo = (item) => {
  return{
    type: todoActiontype.ADD_TODO,
    payload: {
      ...item
    }
  }
}

export const removeTodo = (id) => {
  return{
    type: todoActiontype.REMOVE_TODO,
    payload: {
      id,
    }
  }
}

export const isDone = (item) => {
  return{
    type: todoActiontype.TODO_DONE,
    payload: {
      ...item
    }
  }
}

export const getStore = (item) => {
  return{
    type: todoActiontype.GET_TODO_STORE,
    payload:item
  }
}