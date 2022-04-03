import { cloneElement, ReactElement } from 'react';

import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { RiImageAddFill, RiImageAddLine } from 'react-icons/ri';

type Props = {
  triggerButton: ReactElement;
};

const ImageMenu = ({ triggerButton }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const triggerElement = cloneElement(triggerButton, { onClick: onOpen });
  return (
    <Popover
      isOpen={isOpen}
      onClose={onClose}
      placement="right-start"
      trigger="hover"
      closeOnBlur={false}
      isLazy
    >
      <PopoverTrigger>{triggerElement}</PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <VStack>
            <Center
              flexDir="column"
              h="100px"
              w="100%"
              bg="gray.50"
              rounded="base"
              borderWidth={1}
              borderStyle="dashed"
            >
              <Icon as={RiImageAddFill} boxSize={6} color="gray.600" />
              <Text mt={1} fontSize="sm" color="gray.500">
                Drag and drop the file here to upload...
              </Text>
            </Center>
            <Text fontSize="sm" color="gray.500">
              __or__
            </Text>
            <HStack w="100%">
              <Input
                placeholder="Parse image url here"
                size="sm"
                flex={1}
                rounded="base"
              />
              <Button
                size="sm"
                leftIcon={<Icon as={RiImageAddLine} />}
                colorScheme="green"
              >
                Insert
              </Button>
            </HStack>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ImageMenu;
