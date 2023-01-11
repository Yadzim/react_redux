import { todoActiontype } from "../constants/todoActionType";

const initialState = [];

const todos = (state = initialState, action) => {
  switch(action.type){
    case todoActiontype.ADD_TODO:
      return [...state, action.payload];

    case todoActiontype.REMOVE_TODO:
      return state.filter(item => item?.id !== action.payload.id);

    case todoActiontype.TODO_DONE:
      return state.map(item => {
        if(item?.id === action.payload.id) return {
          ...item,
          isDone: action.payload.isDone,
          date: action.payload.date,
        }
        else return item
      })

    default: return state;
  }
};

export default todos;