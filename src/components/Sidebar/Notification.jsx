import { Box, Flex, Tooltip } from '@chakra-ui/react'
import { NotificationsLogo } from '../../assets/contants'

const Notification = () => {
  return (
    <>
      <Tooltip
        hasArrow
        label={"Notification"}
        placement='right'
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <NotificationsLogo size={25} />
          <Box display={{ base: "none", md: "block" }}>Notification</Box>
        </Flex>
      </Tooltip>
    </>
  )
}

export default Notification