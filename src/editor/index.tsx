import { Box } from '@chakra-ui/react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKitExt from '@tiptap/starter-kit';
import UnderlineExt from '@tiptap/extension-underline';
import PlaceholderExt from '@tiptap/extension-placeholder';
import HighlightExt from '@tiptap/extension-highlight';
import SubscriptExt from '@tiptap/extension-subscript';
import SuperscriptExt from '@tiptap/extension-superscript';
import TextAlignExt from '@tiptap/extension-text-align';
import TaskListExt from '@tiptap/extension-task-list';
import TaskItemExt from '@tiptap/extension-task-item';
import CodeBlockLowlightExt from '@tiptap/extension-code-block-lowlight';
import lowlight from 'lowlight';

import { BubbleMenuBox, FixedMenuBox } from './menus';
import { CommandMenuExt, CommandSuggestion } from './extensions';
import { IEditorValue } from './types';
import styles from './index.module.scss';

type Props = {
  hasToolbar?: boolean;
  placeholderText?: string;
  value: IEditorValue;
  onChange: (value: IEditorValue) => void;
};

export const WebEditor = ({
  hasToolbar = true,
  placeholderText,
  value,
  onChange,
}: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKitExt,
      UnderlineExt,
      HighlightExt,
      SubscriptExt,
      SuperscriptExt,
      TaskListExt,
      CodeBlockLowlightExt.configure({ lowlight }),
      TaskItemExt.configure({ nested: true }),
      TextAlignExt.configure({ types: ['heading', 'paragraph'] }),
      PlaceholderExt.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'paragraph')
            return placeholderText || `Type '/' for commands`;
          return placeholderText || 'Write content...';
        },
      }),
      CommandMenuExt.configure({ suggestion: CommandSuggestion }),
    ],
    content: value.raw || value.html,
    onUpdate({ editor }) {
      const htmlValue = editor.getHTML();
      const rawValue = editor.getJSON();
      onChange({ raw: rawValue, html: htmlValue });
    },
  });

  return (
    <Box borderWidth={1} rounded="base" bg="white">
      {editor && !hasToolbar && <BubbleMenuBox editor={editor} />}
      {editor && hasToolbar && <FixedMenuBox editor={editor} />}
      <Box px={4} py={2}>
        <EditorContent editor={editor} className={styles['custom-editor']} />
      </Box>
    </Box>
  );
};
