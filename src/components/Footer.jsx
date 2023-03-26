import React from 'react'
import { Box, Stack, VStack, HStack, Heading, Text, Button, Input } from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai'
function Footer() {
    return (
        <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
            <Stack direction={['colum', 'row']} >
                <VStack alignItems={'stretch'} w={'full'}>
                    <Heading
                        textTransform={'uppercase'}
                        size='md'
                        textAlign={['center', 'left']}
                    >Subscribe to get updates</Heading>
                    <HStack borderBottom={'2px solid white'} py="2">
                        <Input
                            placeholder='Enter Email Here'
                            border={'none'}
                            outline='none'
                            focusBorderColor='none'
                        />
                        <Button colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'} p={'0'}>
                            <AiOutlineSend size={20} />
                        </Button>
                    </HStack>
                </VStack>
                <VStack borderLeft={['none', '2px solid white']} borderRight={['none', '2px solid white']} w={'full'}>
                <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All rights received</Text>
                </VStack>
                <VStack  borderRight={['none', '2px solid white']} w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://www.youtube.com/@mpcjeeeducator4771">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://instagram.com/_rishi__rr?igshid=ZDdkNTZiNTM=">
              Instagram
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://github.com/RishithReddyRR">
              Github
            </a>
          </Button>
                </VStack>


            </Stack>
        </Box>
    )
}

export default Footer