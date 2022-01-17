import { HStack, Icon, IconButton } from '@chakra-ui/react';
import { Editor, BubbleMenu } from '@tiptap/react';
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
} from 'react-icons/md';

type Props = {
  editor: Editor;
};

export const BubbleMenuBox = ({ editor }: Props) => {
  return (
    <BubbleMenu editor={editor}>
      <HStack p={1} bg="gray.800" rounded="base">
        <IconButton
          size="xs"
          icon={<Icon as={MdFormatBold} boxSize={4} />}
          aria-label="Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          colorScheme={editor.isActive('bold') ? 'whiteAlpha' : 'blackAlpha'}
        />
        <IconButton
          size="xs"
          icon={<Icon as={MdFormatUnderlined} boxSize={4} />}
          aria-label="Underline"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          colorScheme={
            editor.isActive('underline') ? 'whiteAlpha' : 'blackAlpha'
          }
        />
        <IconButton
          size="xs"
          icon={<Icon as={MdFormatItalic} boxSize={4} />}
          aria-label="Italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          colorScheme={editor.isActive('italic') ? 'whiteAlpha' : 'blackAlpha'}
        />
      </HStack>
    </BubbleMenu>
  );
};
