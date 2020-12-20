import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Register = () => {
  return (
    <Flex flexDir="column" align="center" justify="center" pt={28}>
      <Box as="form" bg="#fff" w="40%" mx="auto" py={16} px={16}>
        <Heading as="h3" fontSize="3xl" textAlign="center"  pb={4}>Almost there!!!</Heading>
        <Text textAlign="center" fontSize="xl" pb={4}>Fill this form with your details.</Text>
        <Input type="text" name="firstName" placeholder="First Name"/>
        <Input type="text" name="lastName" placeholder="Last Name"/>
        <Input type="email" name="email" placeholder="Your Email" />
        <Button type="submit" color="#fff" bg="yellow.300" _hover={{background:"yellow.500"}}>Submit</Button>
     </Box>
      </Flex>
  )
}

export default Register
