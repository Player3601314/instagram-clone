import { useToast } from '@chakra-ui/react'
import { useCallback } from 'react'

const useShowToast = () => {
  const toast = useToast()
  const showTast = useCallback(
    (title, description, status) => {
      toast({
        title: title,
        description: description,
        status: status,
        duration: 3000,
        isClosable: true,
      })
    }, [toast])
  return showTast
}

export default useShowToast