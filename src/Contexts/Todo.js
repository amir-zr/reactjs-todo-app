import React from 'react'
const TodoContext = React.createContext({
    todos: [],
    todoActions: {}
})
export default TodoContext