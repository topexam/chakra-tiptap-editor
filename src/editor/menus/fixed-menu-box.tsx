import { HStack, Icon, Square } from '@chakra-ui/react';
import { Editor } from '@tiptap/react';

import { RiBold, RiItalic, RiUnderline } from 'react-icons/ri';

type Props = {
  editor: Editor;
};

export const FixedMenuBox = ({ editor }: Props) => {
  return (
    <HStack px={2} py={1} bg="gray.50" roundedTop="base">
      <Square
        rounded="base"
        p="2px"
        _hover={{ bg: 'blue.100', cursor: 'pointer' }}
        color={editor.isActive('bold') ? 'blue.500' : 'inherit'}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <Icon as={RiBold} boxSize="18px" />
      </Square>
      <Square
        rounded="base"
        p="2px"
        _hover={{ bg: 'blue.100', cursor: 'pointer' }}
        color={editor.isActive('underline') ? 'blue.500' : 'inherit'}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <Icon as={RiUnderline} boxSize="18px" />
      </Square>
      <Square
        rounded="base"
        p="2px"
        _hover={{ bg: 'blue.100', cursor: 'pointer' }}
        color={editor.isActive('italic') ? 'blue.500' : 'inherit'}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <Icon as={RiItalic} boxSize="18px" />
      </Square>
    </HStack>
  );
};
