import {
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { Editor } from '@tiptap/react';
import {
  RiAddCircleFill,
  RiArrowRightSLine,
  RiCodeBoxFill,
  RiFunctions,
  RiImageAddFill,
  RiTableFill,
} from 'react-icons/ri';
import { HiViewGridAdd } from 'react-icons/hi';

import { MenuButton as MenuButtonBox } from '../../common';
import CustomMenuItem from './custom-menu-item';

import FormulaMenu from './formula-menu';
import ImageMenu from './image-menu';
import ThirdServiceMenu from './third-service-menu';

type Props = {
  editor: Editor;
};

export const AddMoreGroup = ({ editor }: Props) => {
  return (
    <HStack>
      <Menu closeOnSelect={false} isLazy>
        {({ isOpen }) => (
          <>
            <MenuButton
              p={1}
              rounded="base"
              _hover={{ bg: 'blue.100' }}
              bg={isOpen ? 'blue.100' : 'inherit'}
            >
              <MenuButtonBox iconType={RiAddCircleFill} />
            </MenuButton>
            <MenuList>
              <ImageMenu
                triggerButton={
                  <MenuItem
                    as={Flex}
                    px={4}
                    py={2}
                    _hover={{ bg: 'gray.100', cursor: 'pointer' }}
                  >
                    <Icon as={RiImageAddFill} mr={2} />
                    <Text flex={1}>Image ...</Text>
                  </MenuItem>
                }
              />
              <MenuItem
                as={Flex}
                px={4}
                py={2}
                _hover={{ bg: 'gray.100', cursor: 'pointer' }}
              >
                <Icon as={RiTableFill} mr={2} />
                <Text flex={1}>Table</Text>
              </MenuItem>
              <MenuItem
                as={Flex}
                px={4}
                py={2}
                _hover={{ bg: 'gray.100', cursor: 'pointer' }}
              >
                <Icon as={RiCodeBoxFill} mr={2} />
                <Text flex={1}>Code Block</Text>
              </MenuItem>
              <FormulaMenu
                triggerButton={
                  <MenuItem
                    as={Flex}
                    px={4}
                    py={2}
                    _hover={{ bg: 'gray.100', cursor: 'pointer' }}
                  >
                    <Icon as={RiFunctions} mr={2} />
                    <Text flex={1}>Math Formula</Text>
                    <Icon as={RiArrowRightSLine} boxSize={5} />
                  </MenuItem>
                }
              />
              <MenuDivider />
              <ThirdServiceMenu
                triggerButton={
                  <MenuItem
                    as={Flex}
                    px={4}
                    py={2}
                    _hover={{ bg: 'gray.100', cursor: 'pointer' }}
                  >
                    <Icon as={HiViewGridAdd} mr={2} />
                    <Text flex={1}>3rd Party Service</Text>
                    <Icon as={RiArrowRightSLine} boxSize={5} />
                  </MenuItem>
                }
              />
            </MenuList>
          </>
        )}
      </Menu>
    </HStack>
  );
};
