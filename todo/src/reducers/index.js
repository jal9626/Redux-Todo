import { ADD_TODO } from "../actions";
import { TOGGLE_TODO } from '../actions';
import { DELETE_TODO } from '../actions';


const initialState = {
    todos: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_TODO:
        const newTodo = {
          value: action.payload,
          completed: false
        }
        return {
            ...state,
            todos: [...state.todos, newTodo]
        };
      case TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            action.payload === index
              ? { ...todo, completed: !todo.completed }
              : todo
          )
        };
      case DELETE_TODO:
        return { 
            ...state,
            todos: state.todos.filter(todo => !todo.completed)
          }  
      
      default:
        return state;  
  }
    
}

