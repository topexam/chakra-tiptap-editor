import { Box } from '@chakra-ui/react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKitExt from '@tiptap/starter-kit';
import UnderlineExt from '@tiptap/extension-underline';

import { BubbleMenuBox } from './menus';

import styles from './index.module.scss';
import { FixedMenuBox } from './menus/fixed-menu-box';
import { CommandMenuExt, CommandSuggestion } from './extensions';

type Props = {
  hasToolbar?: boolean;
};
export const WebEditor = ({ hasToolbar = true }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKitExt,
      UnderlineExt.configure(),
      CommandMenuExt.configure({
        suggestion: CommandSuggestion,
      }),
    ],
    content: '<p>Hello World!</p>',
  });

  return (
    <Box borderWidth={1} rounded="base">
      {editor && !hasToolbar && <BubbleMenuBox editor={editor} />}
      {editor && hasToolbar && <FixedMenuBox editor={editor} />}
      <Box px={2} py={1}>
        <EditorContent editor={editor} className={styles['custom-editor']} />
      </Box>
    </Box>
  );
};
