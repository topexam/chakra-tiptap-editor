import { cloneElement, ReactElement } from 'react';

import {
  Box,
  Center,
  HStack,
  Icon,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { RiFunctions } from 'react-icons/ri';
import { AiOutlineFunction } from 'react-icons/ai';

type Props = {
  triggerButton: ReactElement;
};

const FormulaMenu = ({ triggerButton }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const triggerElement = cloneElement(triggerButton, { onClick: onOpen });
  return (
    <Popover
      isOpen={isOpen}
      onClose={onClose}
      placement="right-start"
      closeOnBlur={false}
      trigger="hover"
      isLazy
    >
      <PopoverTrigger>{triggerElement}</PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <HStack>
            <Center
              flex={1}
              flexDir="column"
              px={2}
              py={2}
              bg="gray.50"
              rounded="base"
              _hover={{ bg: 'gray.100', cursor: 'pointer' }}
            >
              <Icon as={RiFunctions} boxSize={5} />
              <Text>Block level</Text>
            </Center>
            <Center
              flex={1}
              flexDir="column"
              px={2}
              py={2}
              bg="gray.50"
              rounded="base"
              _hover={{ bg: 'gray.100', cursor: 'pointer' }}
            >
              <Icon as={AiOutlineFunction} boxSize={5} />
              <Text>Inline level</Text>
            </Center>
          </HStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default FormulaMenu;
