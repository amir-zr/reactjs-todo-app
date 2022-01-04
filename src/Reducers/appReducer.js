function AppReducer(state, action) {
    console.log({state, action})
    switch (action.type) {
        case 'addTodo' :
            return addTodo(state, action.payload.text)
        case 'removeTodo' :
            return removeTodo(state, action.payload.id)
        case 'editTodo' :
            return editTodo(state, action.payload.id, action.payload.text)
        case 'toggleDoneTodo':
            return toggleDoneTodo(state, action.payload.id)
        default :
            return {}
    }
}

const addTodo = (state, text) => {
    let todo = {
        id: Date.now(),
        text,
        done: false
    }
    return {
        todos: [...state.todos, todo]
    }
}
const removeTodo = (state, id) => {
    return {
        todos: state.todos.filter(todo => todo.id !== id)
    }
}
const editTodo = (state, id, text) => {
    let todoIndex = state.todos.findIndex(todo => todo.id === id)
    state.todos[todoIndex].text = text
    return {
        todos: state.todos
    }
}
const toggleDoneTodo = (state, id) => {
    let todoIndex = state.todos.findIndex(todo => todo.id === id)
    state.todos[todoIndex].done = !state.todos[todoIndex].done
    return {
        todos: state.todos
    }
}
export default AppReducer