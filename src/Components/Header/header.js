import React, {Component} from 'react'
import './header.css'
import {
    Flex,
    Box,
    Heading,
    Spacer,
    Button
} from "@chakra-ui/react";
import Form from '../Form/form'
class Header extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <Flex borderWidth='1px' borderRadius='lg' className={'header-container'} mb={4}>
                <Box p='2'>
                    <Heading size='md'>Todo App</Heading>
                </Box>
                <Spacer/>
                <Box>
                    <Form></Form>
                </Box>
            </Flex>
        )
    }
}

export default Header