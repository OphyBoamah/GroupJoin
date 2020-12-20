import './App.css';
import { Box, Button, Flex, Heading, Image, Input, Text } from '@chakra-ui/react';


import Image1 from './Images/millionaire.jpg';
import { useState } from 'react';
import WontJoin from './WontJoin';
import Register from './Register';
import WillJoin from './WillJoin';


function App() {
  const [showRejectionPage, setshowRejectionPage] = useState(false);
  const [showRegistrationPage, setshowRegistrationPage] = useState(false);
  const [showWelcomePage, setShowWelcomePage] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);
  const pickedNo = () => {
    setshowRejectionPage(!showRejectionPage)
  }
  const pickedYes = () => {
    setshowRegistrationPage(!showRegistrationPage)
  }
  const homePage = () => {
    setShowHomePage(!showHomePage)
  }
  const welcomeNewbies = () => {
    setShowWelcomePage(!showWelcomePage)
  }
  return (
    <Box ><Flex flexDir="column" align="center" justify="center" pt={28} display={showRejectionPage || showRegistrationPage ? 'none' : 'flex'}>
        <Image src={Image1} alt="millionaire_image" w="20%" />
      <Heading as="h1" fontSize="4xl" py={4}>Welcome to Phyllionaires' club!</Heading>
      <Text fontSize="xl">We create, raise and sustain billionaires.</Text>
      <Text fontSize="xl">Want to join us?</Text>
      <Flex color="#fff" pt={4}>
        <Button bg="blue.300" _hover={{background:"blue.500"}} w={40} h={12} onClick={()=>pickedYes()}>Yes</Button>
        <Button bg="green.300" _hover={{background:"green.500"}} w={40} h={12} ml={4} onClick={()=>pickedNo()}>No</Button>
        </Flex>
      </Flex>
      {showRejectionPage && (<WontJoin homePage={homePage} showHomePage={showHomePage} showRegistrationPage={showRegistrationPage} />)}
      {showRegistrationPage && (<Register showWelcomePage={showWelcomePage} showHomePage={showHomePage} showRejectionPage={showRejectionPage}/>)}
      {showWelcomePage && (<WillJoin welcomeNewbies={welcomeNewbies} homePage={homePage} showHomePage={showHomePage} showRegistrationPage={showRegistrationPage} />)}
      {showHomePage && (<App/> )}
      </Box>
      )}
   

export default App;
