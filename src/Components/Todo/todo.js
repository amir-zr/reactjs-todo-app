import React, {Component, useState} from "react";
import {
    Td, Tr, IconButton, Flex, Input, InputGroup,
    InputRightElement,
    Button
} from "@chakra-ui/react";
import {BiEditAlt, BiCheck, BiTrash} from "react-icons/bi";
import './todo.css'
import TodoContext from "../../Contexts/Todo";

class Todo extends Component {

    state = {
        onEditing: false,
        todoText : this.props.todo.text
    }
    constructor(props) {
        super(props);
    }
    toggleEditing = () => {
        this.setState(prevState => {
            return {
                onEditing: !prevState.onEditing
            }
        })
    }
    editTodoText = (e)=>{
        this.setState(prevState =>{
            return{
                todoText : e.target.value
            }
        })
    }
    saveTodo = (id,context)=>{
        context.dispatch({type : 'editTodo' , payload : { id , text : this.state.todoText}})
        this.toggleEditing()
    }

    render() {
        let {row, todo, todoActions} = this.props
        return (
            <TodoContext.Consumer>
                {context=>(
                    <Tr>
                        <Td>{row}</Td>
                        <Td>
                            {
                                this.state.onEditing === true ?
                                    <InputGroup size='md'>
                                        <Input
                                            pr='4.5rem'
                                            value={this.state.todoText}
                                            onChange={(e)=>this.editTodoText(e)}
                                        />
                                        <InputRightElement width='4.5rem'>
                                            <Button h='1.75rem' size='sm' onClick={(e)=> this.saveTodo(todo.id , context)}>Save</Button>
                                        </InputRightElement>
                                    </InputGroup> :
                                    todo.text
                            }
                        </Td>
                        <Td>
                            <Flex w={'160px'} justify={'space-evenly'} m={'0 auto'}>
                                <IconButton size={'sm'} colorScheme={todo.done === true ? 'orange' : 'green'}
                                            aria-label='Done Todo'
                                            icon={<BiCheck color={'white'}
                                                           onClick={() => context.dispatch({type : 'toggleDoneTodo' , payload : { id : todo.id}})}/>}/>
                                <IconButton size={'sm'} colorScheme='blue' aria-label='Edit Todo'
                                            icon={<BiEditAlt color={'white'}/>}
                                            onClick={() => this.toggleEditing()}/>
                                <IconButton size={'sm'} colorScheme='red' aria-label='Delete Todo'
                                            icon={<BiTrash color={'white'}/>}
                                            onClick={() => context.dispatch({type : 'removeTodo' , payload : {id : todo.id}})}/>
                            </Flex>
                        </Td>
                    </Tr>
                )}
            </TodoContext.Consumer>
        )
    }

}

export default Todo