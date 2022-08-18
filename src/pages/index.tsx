import type { NextPage } from 'next'
import {Container, Box, Heading, useColorModeValue, Flex} from "@chakra-ui/react"
import { AddIcon, SearchIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

const Home: NextPage = () => {
  return (
    <Container>
      <Flex 
      borderRadius="lg" 
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
      p={3} 
      mt={6}
      mb={6} 
      justify="center"
      >
        Welcome, My Reminder App <br/>
      </Flex>

      <Box display={{md:"flex"}}></Box>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Remainder App
        </Heading>
        <p>A reminder app that works with Google Calendar</p>
      </Box>
      <Box
          // ↓Shrink:0以下になった場合、数値に従って縮小する
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
      </Box>

      <Box
        p={3} 
        mt={6}
        mb={6} 
        align="center"
        >
        {/* <NextLink href="/setting" passHref> */}
          <AddIcon />
        {/* <NextLink/> */}
        <ViewIcon />
        <ViewOffIcon />
        <SearchIcon />
      </Box>

      <Flex
        borderRadius="lg" 
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
        p={3} 
        mt={6}
        mb={6} 
        justify="center"
        >
          
      </Flex>

    </Container>
)
}

export default Home
