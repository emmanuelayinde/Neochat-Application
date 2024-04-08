import { Box, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Box>
      <Text>
        Oooooops.... It looks like you are in the wrong place
      </Text>

      <Link to={'/'}>Go TO Chat</Link>
    </Box>
  )
}

export default NotFound