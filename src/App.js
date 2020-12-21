import './App.css';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';


import Image1 from './Images/millionaire.jpg';
import { useState } from 'react';
import WontJoin from './WontJoin';
import Register from './Register';
import WillJoin from './WillJoin';

const Home = ({handleClick}) => (
  <Flex flexDir="column" align="center" justify="center" pt={28} >
        <Image src={Image1} alt="millionaire_image" w="20%" />
      <Heading as="h1" fontSize="4xl" py={4}>Welcome to Phyllionaires' club!</Heading>
      <Text fontSize="xl">We create, raise and sustain billionaires.</Text>
      <Text fontSize="xl">Want to join us?</Text>
      <Flex color="#fff" pt={4}>
        <Button bg="blue.300" _hover={{background:"blue.500"}} w={40} h={12} onClick={()=> handleClick('register')}>Yes</Button>
        <Button bg="green.300" _hover={{background:"green.500"}} w={40} h={12} ml={4} onClick={()=> handleClick('reject')}>No</Button>
      </Flex>
    </Flex>
)


function App() {
  const [page, setPage] = useState('home');

  const handleClick = (name) => {
    setPage(name)
  }

  const getPage = (value) => {
    switch (value) {
      case 'register':
        return <Register handleClick={handleClick}/>
      case 'join':
        return <WillJoin handleClick={handleClick}/>
      case 'reject':
        return <WontJoin handleClick={handleClick} />
      case 'home': 
        return <Home handleClick={handleClick} />
      default:
        return null
    }
  }
 

  return (
    <Box >
      
      {getPage(page)}
      
      </Box>
      )}
   

export default App;
