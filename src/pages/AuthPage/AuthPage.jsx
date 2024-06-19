import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'
import { useNavigate } from 'react-router-dom'

const AuthPage = ({ authUser }) => {

  const navigate = useNavigate()

  if (authUser) {
    useEffect(() => {
      navigate('/');
    }, [authUser]);
  }

  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src='/auth.png' h={650} alt='Phone img' />
          </Box>

          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"} >Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src='/playstore.png' h={"10"} alt='Playstore logo' />
              <Image src='/microsoft.png' h={"10"} alt='Microsoft logo' />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  )
}

export default AuthPage