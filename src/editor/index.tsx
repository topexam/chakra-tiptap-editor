import { Box } from '@chakra-ui/react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKitExt from '@tiptap/starter-kit';
import UnderlineExt from '@tiptap/extension-underline';
import PlaceholderExt from '@tiptap/extension-placeholder';
import HighlightExt from '@tiptap/extension-highlight';
import SubscriptExt from '@tiptap/extension-subscript';
import SuperscriptExt from '@tiptap/extension-superscript';
import TextAlignExt from '@tiptap/extension-text-align';

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
      UnderlineExt,
      HighlightExt,
      SubscriptExt,
      SuperscriptExt,
      TextAlignExt.configure({
        types: ['heading', 'paragraph'],
      }),
      PlaceholderExt.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'paragraph')
            return placeholderText || `Type '/' for commands`;
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
