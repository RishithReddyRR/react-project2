import React from 'react'
import '../styles/header.scss'
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerCloseButton, DrawerContent, Button, useDisclosure, VStack,HStack } from '@chakra-ui/react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { Link } from 'react-router-dom'
function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
                pos='fixed'
                top={4}
                left={4}
                colorScheme="purple"
                p={"0"}
                w={10}
                h={10}
                borderRadius='full'
                onClick={onOpen}
                zIndex={'2'}
            >
                <BiMenuAltLeft size={20} />
            </Button>
            <Drawer isOpen={isOpen} onClose={onClose} placement="left">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>VIDEOHUB</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>
                            <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                                <Link to="/">Home</Link>
                            </Button>                   
                            <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                                <Link to="/Videos">Videos</Link>
                            </Button>                   
                            <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                                <Link to="/">Free Videos</Link>
                            </Button>                   
                            <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                                <Link to="/upload">Upload video</Link>
                            </Button>                   
                             </VStack>
                             <HStack pos={'absolute'} bottom={2} left={2} justifyContent={'space-evenly'} w={'1oo%'}>
                                <Button onClick={onClose} colorScheme={'purple'} w={'5rem'}>
                                    <Link to="/login">Login</Link>
                                </Button>
                                <Button onClick={onClose} variant={'outline'} w={'5rem'}>
                                    <Link to="/signup"> Sign Up</Link>
                                </Button>
                             </HStack>


                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header