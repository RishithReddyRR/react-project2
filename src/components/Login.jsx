import React from 'react'
import { VStack, Input, Container, Heading, Button ,Text} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
function Login() {
    return (
        <Container maxW={'container.xl'} h={"100vh"} p={'16'} >
            <form >
                <VStack textAlign={'stretch'} justifyContent="center" w={['full', '96']} m="auto" spacing={'5'} >
                    <Heading>
                        Welcome Back
                    </Heading>
                    <Input type={'text'} placeholder="email" focusBorderColor='purple.500'></Input>
                    <Input type={'password'} placeholder="password" required focusBorderColor='purple.500'></Input>
                    <Button variant={'link'} alignSelf="flex-end">forgotPassword?</Button>
                    <Button colorScheme={"purple"} w='full' >LogIn</Button>
                    <Text textAlign={'right'} alignSelf="flex-end">
                        New User?{' '}
                        <Button variant={'link'} colorScheme={'purple'} type="submit">
                            <Link to={'/signup'}>Sign Up</Link>
                        </Button>
                    </Text>
                </VStack>
            </form>
        </Container>
    )
}

export default Login 