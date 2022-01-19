import { Box } from '@chakra-ui/react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKitExt from '@tiptap/starter-kit';
import UnderlineExt from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';

import { BubbleMenuBox } from './menus';

import styles from './index.module.scss';
import { FixedMenuBox } from './menus/fixed-menu-box';
import { CommandMenuExt, CommandSuggestion } from './extensions';

type Props = {
  hasToolbar?: boolean;
  placeholderText?: string;
};
export const WebEditor = ({ hasToolbar = true, placeholderText }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKitExt,
      UnderlineExt.configure(),
      Placeholder.configure({
        placeholder: ({ node }) => {
          console.log(placeholderText);
          if (node.type.name === 'paragraph') {
            return placeholderText || `Type '/' for commands`;
          }

          return placeholderText || 'Write content...';
        },
      }),
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
      <Box px={4} py={2}>
        <EditorContent editor={editor} className={styles['custom-editor']} />
      </Box>
    </Box>
  );
};
