import { ADD_TODO } from "../actions";


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
      default:
        return state;  
  }
    
}

