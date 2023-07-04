import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initializer = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
  };

export const useTodos = () => {
  
    const [todos, dispatch] = useReducer(todoReducer, [], initializer );


    // aqui se graba la informacion en el localStorage 
    //para que la informacion sea persistente
    
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
  
    const handleNewTodo = ( todo ) => {
      // console.log({ todo })
      const action = {
        type:'[TODO] Add todo',
        payload: todo
      }
  
      dispatch( action );
    }
  
    const handleDeleteTodo = ( id ) => {
    // console.log( { id })
      dispatch({
        type: '[TODO] Remove Todo',
        payload: id
      })
    }
  
  
    const handleToggleTodo = ( id ) => {
      // console.log( { id })
        dispatch({
          type: '[TODO] Toggle Todo',
          payload: id
        })
      }

      return {
        todos,
        todosCount: todos.length,  
        pendingTodoCount: todos.filter(todo => !todo.done).length,
        handleDeleteTodo , 
        handleToggleTodo , 
        handleNewTodo
      }
}
