import {
  Button,
  forwardRef,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react';
import { Editor } from '@tiptap/react';
import { cloneElement } from 'react';
import { RiAddCircleFill } from 'react-icons/ri';
import { MenuButton as MenuButtonBox } from '../common';

type Props = {
  editor: Editor;
};

export const AddMoreGroup = ({ editor }: Props) => {
  return (
    <HStack>
      <Menu closeOnSelect={false}>
        <MenuButton>
          <MenuButtonBox iconType={RiAddCircleFill} />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <SubMenu triggerButton={<MenuItem>Delete</MenuItem>} />
        </MenuList>
      </Menu>
    </HStack>
  );
};

const SubMenu = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const triggerElement = cloneElement(props.triggerButton, { onclick: onOpen });
  return (
    <Popover isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>{triggerElement}</PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
