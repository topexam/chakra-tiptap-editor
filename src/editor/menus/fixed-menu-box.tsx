import { HStack, IconButton, Icon } from '@chakra-ui/react';
import { Editor } from '@tiptap/react';
import {
  MdFormatBold,
  MdFormatUnderlined,
  MdFormatItalic,
} from 'react-icons/md';

type Props = {
  editor: Editor;
};

export const FixedMenuBox = ({ editor }: Props) => {
  return (
    <HStack p={2} bg="gray.100" rounded="base">
      <IconButton
        size="xs"
        icon={<Icon as={MdFormatBold} boxSize={4} />}
        aria-label="Bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
        colorScheme={editor.isActive('bold') ? 'blue' : 'gray'}
        variant="ghost"
      />
      <IconButton
        size="xs"
        icon={<Icon as={MdFormatUnderlined} boxSize={4} />}
        aria-label="Underline"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        colorScheme={editor.isActive('underline') ? 'blue' : 'gray'}
        variant="ghost"
      />
      <IconButton
        size="xs"
        icon={<Icon as={MdFormatItalic} boxSize={4} />}
        aria-label="Italic"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        colorScheme={editor.isActive('italic') ? 'blue' : 'gray'}
        variant="ghost"
      />
    </HStack>
  );
};
