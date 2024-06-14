import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'
import useGetSuggestedUser from '../../hooks/useGetSuggestedUser'

const SuggestedUsers = () => {

  const { isLoading, suggestedUsers } = useGetSuggestedUser()

  if (isLoading) return null

  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      {SuggestedUser.length !== 0 && (
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
          </Text>
          <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
            See All
          </Text>
        </Flex>
      )}

      {suggestedUsers.map(user => (
        <SuggestedUser key={user.uid} user={user} />
      ))}

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        2024 Built By{" "}
        <Link color={"blue.500"} fontSize={14}>As a Programmer</Link>
      </Box>
    </VStack>
  )
}

export default SuggestedUsers