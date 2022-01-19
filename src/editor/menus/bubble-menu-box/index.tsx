import { HStack, Icon, Square } from '@chakra-ui/react';
import { Editor, BubbleMenu } from '@tiptap/react';
import { RiBold, RiItalic, RiUnderline } from 'react-icons/ri';
import { HeadingGroup } from '../fixed-menu-box/groups';

type Props = {
  editor: Editor;
};

export const BubbleMenuBox = ({ editor }: Props) => {
  return (
    <BubbleMenu editor={editor}>
      <HStack p={1} rounded="base" borderWidth={1} shadow="lg">
        <Square
          rounded="base"
          p="2px"
          _hover={{ bg: 'blue.100', cursor: 'pointer' }}
          color={editor.isActive('bold') ? 'blue.500' : 'inherit'}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Icon as={RiBold} boxSize={4} />
        </Square>
        <Square
          rounded="base"
          p="2px"
          _hover={{ bg: 'blue.100', cursor: 'pointer' }}
          color={editor.isActive('underline') ? 'blue.500' : 'inherit'}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <Icon as={RiUnderline} boxSize={4} />
        </Square>
        <Square
          rounded="base"
          p="2px"
          _hover={{ bg: 'blue.100', cursor: 'pointer' }}
          color={editor.isActive('italic') ? 'blue.500' : 'inherit'}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Icon as={RiItalic} boxSize={4} />
        </Square>
      </HStack>
    </BubbleMenu>
  );
};
