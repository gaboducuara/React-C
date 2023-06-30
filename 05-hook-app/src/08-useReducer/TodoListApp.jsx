import { TodoItem } from "./TodoItem"


export const TodoListApp = ({ todos = []}) => {
  return (

        <ul className="list-group">
            {
            
            todos.map( todo  => (
                <TodoItem key={todo.id} todo={todo}/>
            ))
            
            }
        </ul>
    
  )
}
