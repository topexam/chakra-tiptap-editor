import { HStack } from '@chakra-ui/react';
import { Editor } from '@tiptap/react';
import {
  RiBold,
  RiUnderline,
  RiItalic,
  RiStrikethrough,
  RiTBoxFill,
  RiSubscript,
  RiSuperscript,
} from 'react-icons/ri';
import { MenuButton } from '../common';

type Props = {
  editor: Editor;
};

export const MarkGroup = ({ editor }: Props) => {
  return (
    <HStack>
      <MenuButton
        iconType={RiBold}
        isActive={editor.isActive('bold')}
        onClick={() => editor.chain().focus().toggleBold().run()}
      />
      <MenuButton
        iconType={RiUnderline}
        isActive={editor.isActive('underline')}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      />
      <MenuButton
        iconType={RiItalic}
        isActive={editor.isActive('italic')}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      />
      <MenuButton
        iconType={RiStrikethrough}
        isActive={editor.isActive('strike')}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      />
      <MenuButton
        iconType={RiTBoxFill}
        isActive={editor.isActive('highlight')}
        onClick={() => editor.chain().focus().toggleHighlight().run()}
      />
      <MenuButton
        iconType={RiSubscript}
        isActive={editor.isActive('subscript')}
        onClick={() => editor.chain().focus().toggleSubscript().run()}
      />
      <MenuButton
        iconType={RiSuperscript}
        isActive={editor.isActive('superscript')}
        onClick={() => editor.chain().focus().toggleSuperscript().run()}
      />
    </HStack>
  );
};
