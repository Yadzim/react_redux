import { todoActiontype } from "../constants/todoActionType";

const initialState = [];

const todos = (state = initialState, action) => {
  switch(action.type){
    case todoActiontype.ADD_TODO:
      return state.push(action.payload);

    case todoActiontype.REMOVE_TODO:
      return state.filter(item => item.id !== action.payload.id);

    case todoActiontype.TODO_DONE:
      return state.map(item => {
        if(item.id === action.payload.id) return {
          ...item,
          isDone: action.payload.isDone
        }
        else return item
      })

    case todoActiontype.GET_TODO_STORE:
      return action.payload

      default: return state;
  }
};

export default todos;