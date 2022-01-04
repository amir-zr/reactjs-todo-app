import React, {Component} from "react"
import {Input, Button, Flex} from '@chakra-ui/react'
import './form.css'
import TodoContext from '../../Contexts/Todo'
class Form extends Component {

    state = {
        formInput: ''
    }

    editText = (e) => {
        this.setState(prevState => {
            return {
                formInput: e.target.value
            }
        })
    }

    constructor(props) {
        super();
    }

    addTodo = (e,context) => {
        e.preventDefault()
        if(this.state.formInput !== ''){
            context.dispatch({type : 'addTodo' , payload : {text : this.state.formInput}})
            this.setState({
                formInput: ''
            })
        }
    }

    render() {
        return (
            <TodoContext.Consumer>
                {context =>(
                    <form>
                        <Flex className={'flex-container'}>
                            <Input variant='outline' placeholder='Add Your Todo Text' value={this.state.formInput}
                                   onChange={this.editText}/>
                            <Button type={'submit'} className={'add-btn'} colorScheme='teal' variant='outline' width='120px'
                                    onClick={(e) => this.addTodo(e,context)}>Add</Button>
                        </Flex>
                    </form>
                )}
            </TodoContext.Consumer>
        )
    }

}

export default Form