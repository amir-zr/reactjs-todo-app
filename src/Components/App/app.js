import React, {useReducer} from "react";
import Header from '../Header/header'
import './app.css'
import {ChakraProvider} from "@chakra-ui/react";
import TodoList from '../TodoList/todoList'
import TodoContext from '../../Contexts/Todo'
import AppReducer from '../../Reducers/appReducer'

function App() {

    const [state , dispatch] = useReducer(AppReducer , {
        todos:[]
    })
    return (
        <ChakraProvider>
            <TodoContext.Provider value={{
                todos : state.todos,
                dispatch
            }}>
                <Header></Header>
                <TodoList></TodoList>
            </TodoContext.Provider>
        </ChakraProvider>
    );

}

export default App;
