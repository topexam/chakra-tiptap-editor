import { Box, HStack } from '@chakra-ui/react';
import { Editor } from '@tiptap/react';

import { DividerGroup, HeadingGroup, MarkGroup } from './groups';

type Props = {
  editor: Editor;
};

export const FixedMenuBox = ({ editor }: Props) => {
  return (
    <HStack px={2} py={2} bg="gray.50" roundedTop="base">
      <HeadingGroup editor={editor} />
      <MarkGroup editor={editor} />
      <DividerGroup />
    </HStack>
  );
};
