import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'


import Image3 from './Images/welcome.jpg';
const WillJoin = ({handleClick }) => {
  return (
    <Box><Flex flexDir="column" align="center" justify="center" pt={28}>
        <Image src={Image3} w="30%" />
      <Heading as="h1" fontSize="4xl" py={4}>Welcome aboard, fam!</Heading>
      <Text fontSize="xl">Thank you for believing in and choosing us!</Text>
        <Text fontSize="xl">We promise, you won't regret this decision! </Text>
        <Button color="#fff" bg="blue.300" _hover={{background:"blue.500"}} w={40} h={12} onClick={() => handleClick('home')} >Sweet</Button>
       </Flex>
    </Box>
  )
}

export default WillJoin
