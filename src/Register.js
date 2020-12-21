import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Register = ({ handleClick }) => {
  const [inputValue, setInputValue] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
    })
  const onChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    setInputValue({...inputValue, [name]:value}) 
  }
  

  return (
    <Flex flexDir="column" align="center" justify="center" pt={28}>
      <Box bg="#fff" w="40%" mx="auto" py={16} px={16}>
        <Heading as="h3" fontSize="3xl" textAlign="center"  pb={4}>Almost there!!!</Heading>
        <Text textAlign="center" fontSize="xl" pb={4}>Fill this form with your details.</Text>
        <Input type="text" name="firstName" value={inputValue.firstName} onChange={onChange} placeholder="First Name"/>
        <Input type="text" name="lastName" value={inputValue.lastName} onChange={onChange} placeholder="Last Name" my={4}/>
        <Input type="email" name="email" value={inputValue.email} onChange={onChange} placeholder="Your Email" />
        <Button type="submit" color="#fff" bg="yellow.300" _hover={{background:"yellow.500"}} onClick={() => handleClick('join')}>Submit</Button>
     </Box>
      </Flex>
  )
}

export default Register
