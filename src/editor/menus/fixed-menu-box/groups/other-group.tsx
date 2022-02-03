import { HStack } from '@chakra-ui/react';
import { Editor } from '@tiptap/react';
import { RiFormatClear, RiFullscreenFill } from 'react-icons/ri';
import { MenuButton } from '../common';

type Props = {
  editor: Editor;
};

export const OtherGroup = ({ editor }: Props) => {
  return (
    <>
      <MenuButton
        iconType={RiFormatClear}
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      />
      <MenuButton iconType={RiFullscreenFill} onClick={() => {}} />
    </>
  );
};
