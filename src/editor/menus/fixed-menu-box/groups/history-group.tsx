import { HStack } from '@chakra-ui/react';
import { Editor } from '@tiptap/react';
import { MdRedo, MdUndo } from 'react-icons/md';
import { MenuButton } from '../common';

type Props = {
  editor: Editor;
};

export const HistoryGroup = ({ editor }: Props) => {
  return (
    <>
      <MenuButton
        iconType={MdUndo}
        isActive={editor.can().undo()}
        onClick={() => editor.chain().focus().undo().run()}
        isDisabled={!editor.can().undo()}
      />
      <MenuButton
        iconType={MdRedo}
        isActive={editor.can().redo()}
        onClick={() => editor.chain().focus().redo().run()}
        isDisabled={!editor.can().redo()}
      />
    </>
  );
};
