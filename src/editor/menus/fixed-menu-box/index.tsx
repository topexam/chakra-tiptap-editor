import { HStack } from '@chakra-ui/react';
import { Editor } from '@tiptap/react';

import {
  AlignGroup,
  BlockGroup,
  DividerGroup,
  HeadingGroup,
  HistoryGroup,
  ListGroup,
  MarkGroup,
  OtherGroup,
} from './groups';

type Props = {
  editor: Editor;
};

export const FixedMenuBox = ({ editor }: Props) => {
  return (
    <HStack px={2} py={2} bg="gray.50" roundedTop="base">
      <HistoryGroup editor={editor} />
      <DividerGroup />
      <HeadingGroup editor={editor} />
      <MarkGroup editor={editor} />
      <DividerGroup />
      <AlignGroup editor={editor} />
      <DividerGroup />
      <ListGroup editor={editor} />
      <DividerGroup />
      <BlockGroup editor={editor} />
      <DividerGroup />
      <OtherGroup editor={editor} />
    </HStack>
  );
};
