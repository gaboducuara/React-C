import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoListApp } from "./TodoListApp";
import { TodoAdd } from "./TodoAdd";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 5,
    description: "Recolectar la piedra del tiempo",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = ( todo ) => {
    console.log({ todo })
  }

  return (
    <>
      <h1>
        todoApp: 10 <small>pendientes: 2 </small>{" "}
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
            <TodoListApp todos={todos}/>
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
