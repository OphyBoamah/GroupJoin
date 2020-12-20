
import { Box, Container, Image, Flex, Heading, Text, Grid } from '@chakra-ui/react';


const Card = ({toggleCardOff}) => {
 
  return (
    <Container maxW='6xl' py={20}>
      <Grid templateColumns='repeat(3, 1fr)'>
        <Box rounded='md' shadow='md' bg='white' overflow='hidden' position="relative" >
          <Flex align="center" justify="center" bg="#fff" w={8} h={8} position="absolute" top={2} right={2} zIndex={20} fontWeight={800} rounded='sm'  cursor="pointer" onClick={toggleCardOff} >X</Flex>
          <Box h={56} w='100%' position="relative">
            <Image
              h='100%'
              w='100%'
              objectFit='cover'
              src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              
            />
          </Box>
          <Box px={8} py={10}>
            <Flex align='center' justify='space-between'>
              <Heading as='h3' fontSize='2xl'>
                Movie Title
              </Heading>
              <Text>Ratings: 4.8</Text>
            </Flex>
            <Text color='gray.600' my={3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, perspiciatis.
            </Text>
            <Flex
              align='center'
              justify='space-between'
              color='gray.500'
              fontSize='sm'
            >
              <Text>Release data:</Text>
              <Text>20/08/2020</Text>
            </Flex>
          </Box>
        </Box>
      </Grid>
    </Container>
  )
}

export default Card
