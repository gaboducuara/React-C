
const initialState = [{
    id:1, 
    todo: 'recolectar la piedra del alma',
    done: false,
}];

const todoReducer = (state = initialState, action = {}) => {

    if  ( action.type === '[todo] add todo') {
        // state.push (action.payload)
        return [ ...state, action.payload ];
    }

    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done : false,
};

const addTodoAction = {
    type: '[todo] add todo',
    payload: newTodo,
};

todos = todoReducer( todos , addTodoAction);

console.log({ state: todos })