import { Box, Flex, HStack, VStack, Text } from "@chakra-ui/react"
import { DocumentIcon, DownloadIcon } from "../../assets"


function ChatDocument() {

    return (
        <Flex
            gap={8}
            alignItems={'center'}
            justifyContent={'space-between'}
            className={`p-2 rounded-md bg-black/15 my-2`}
        >
            <HStack gap={2}>
                <DocumentIcon styles="w-9 h-9" />
                <VStack alignItems={'flex-start'} gap={0.5}>
                    <Text className="text-sm"> Document.pdf</Text>
                    <Text className="text-sm italic">pdf</Text>
                </VStack>
            </HStack>

            <Box className='border rounded-full p-1'>
                <DownloadIcon styles="w-5 h-5" />
            </Box>

        </Flex>
    )
}

export default ChatDocument