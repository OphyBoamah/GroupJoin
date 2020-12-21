import {  Button, Flex, Heading, Image, Text  } from '@chakra-ui/react'
import React from 'react'

import Image2 from './Images/disappointed.jpg';

const WontJoin = ({handleClick}) => {
  return (
    <Flex flexDir="column" align="center" justify="center" pt={28}>
      <Image src={Image2} w="25%" />
      <Heading as="h1" fontSize="3xl" py={4}>Really? You don't want to join us?</Heading>
      <Text>I have no words for you right now </Text>
      <Text>If you ever change your mind, you know what to do. </Text>
      <Button bg="blue.300" color="#fff" _hover={{background:"blue.500"}} w={40} h={12} onClick={() => handleClick('home')} mt={4}>Bye</Button>
      
    </Flex>
  )
}

export default WontJoin
