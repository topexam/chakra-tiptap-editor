import { HStack } from '@chakra-ui/react';
import { Editor } from '@tiptap/react';
import { RiDoubleQuotesL, RiCodeBoxFill } from 'react-icons/ri';
import { MenuButton } from '../common';

type Props = {
  editor: Editor;
};

export const BlockGroup = ({ editor }: Props) => {
  return (
    <HStack>
      <MenuButton
        iconType={RiDoubleQuotesL}
        isActive={editor.isActive('blockquote')}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      />
      <MenuButton
        iconType={RiCodeBoxFill}
        isActive={editor.isActive('codeBlock')}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      />
    </HStack>
  );
};
