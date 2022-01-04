import React, {useState , useContext} from "react"
import './todoList.css'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Flex,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Badge
} from '@chakra-ui/react'
import Todo from '../Todo/todo'
import TodosContext from '../../Contexts/Todo'
function TodoList() {

    let todosContext = useContext(TodosContext)
    let {todos , dispatch} = todosContext
    let count = 0
    let doneTodos = todos.filter(todo => todo.done === true)
    let unDoneTodos = todos.filter(todo => todo.done === false)
    return (
        <Flex className={'todo-list-container'}>
            {
                todos.length >= 1 ?
                    <Tabs variant='enclosed' w={'100%'}>
                        <TabList>
                            <Tab>Un Completed<Badge ml='1' colorScheme='gray'>{unDoneTodos.length}</Badge></Tab>
                            <Tab>Completed<Badge ml='1' colorScheme='green'>{doneTodos.length}</Badge></Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                {
                                    unDoneTodos.length >= 1 ?
                                        <Table variant='simple' size={'sm'}>
                                            <Thead>
                                                <Tr>
                                                    <Th>Row</Th>
                                                    <Th>Todo</Th>
                                                    <Th>Actions</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {unDoneTodos.map(todo => {
                                                    count++
                                                    return <Todo key={todo.id} row={count} todo={todo}></Todo>
                                                })}
                                            </Tbody>
                                        </Table>
                                        :
                                        <Alert status='warning'>
                                            <AlertIcon/>
                                            There Is No Un Completed Todo
                                        </Alert>
                                }
                            </TabPanel>
                            <TabPanel>
                                {
                                    doneTodos.length >= 1 ?
                                        <Table variant='simple' size={'sm'}>
                                            <Thead>
                                                <Tr>
                                                    <Th>Row</Th>
                                                    <Th>Todo</Th>
                                                    <Th>Actions</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {doneTodos.map(todo => {
                                                    count++
                                                    return <Todo key={todo.id} row={count} todo={todo}></Todo>
                                                })}
                                            </Tbody>
                                        </Table>
                                        :
                                        <Alert status='warning'>
                                            <AlertIcon/>
                                            There Is No Completed Todo
                                        </Alert>
                                }
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    :
                    <Alert
                        status='warning'
                        variant='subtle'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        textAlign='center'
                        height='200px'
                        className={'main-alert'}
                    >
                        <AlertIcon boxSize='40px' mr={0}/>
                        <AlertTitle mt={4} mb={1} fontSize='lg'>
                            Todo List Is Empty!
                        </AlertTitle>
                        <AlertDescription maxWidth='sm'>
                            Try To Add Todo From Top Of This Page.
                        </AlertDescription>
                    </Alert>
            }
        </Flex>
    )
}

export default TodoList