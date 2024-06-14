import { Avatar, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import useUserProfileStore from '../../store/userProfileStore'
import { timeAgo } from '../../utils/timeAgo'

const Caption = ({post}) => {
  const userProfile = useUserProfileStore(state => state.userProfile)
  return (
    <Flex gap={4}>
      <Link to={`/${userProfile.username}`}>
        <Avatar src={userProfile.profilePicURL} size={"sm"} />
      </Link>
      <Flex direction={"column"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontWeight={"bold"} fontSize={12}>
            <Link to={`/${userProfile.username}`}>
              {userProfile.username}
            </Link>
          </Text>
          <Text fontSize={14}>{post.caption}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {timeAgo(post.createdAt)}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Caption