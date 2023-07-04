import { TodoListApp } from "./TodoListApp";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";

export const TodoApp = () => {

  const { pendingTodoCount, 
        todosCount, 
        todos, 
        handleDeleteTodo, 
        handleToggleTodo, 
        handleNewTodo} = useTodos();

  return (
    <>
      <h1>

        todoApp: { todosCount } 
        <small> 
          pendientes:{ pendingTodoCount } 
        </small> {" "}

      </h1>
      
      <hr />

      <div className="row">
        <div className="col-7">
            <TodoListApp 
              todos={todos} 
              onDeleteTodo={ handleDeleteTodo }
              onToggleTodo={ handleToggleTodo   }
              />
        </div>
        
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
            <TodoAdd onNewTodo={  handleNewTodo }/>
        </div>
      </div>
    </>
  );
};
