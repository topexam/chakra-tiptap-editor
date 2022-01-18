import tippy from 'tippy.js';
import { ReactRenderer } from '@tiptap/react';
import {
  MdFormatQuote,
  MdLooks3,
  MdLooks4,
  MdLooks5,
  MdLooks6,
  MdLooksOne,
  MdLooksTwo,
} from 'react-icons/md';

import CommandList from './command-list';

export const CommandSuggestion = {
  items: ({ query }: { query: string }) => {
    return [
      {
        title: 'H1',
        desc: 'Heading 1',
        icon: MdLooksOne,
        command: ({ editor, range }: any) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode('heading', { level: 1 })
            .run();
        },
      },
      {
        title: 'H2',
        desc: 'Heading 2',
        icon: MdLooksTwo,
        command: ({ editor, range }: any) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode('heading', { level: 2 })
            .run();
        },
      },
      {
        title: 'H3',
        desc: 'Heading 3',
        icon: MdLooks3,
        command: ({ editor, range }: any) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode('heading', { level: 3 })
            .run();
        },
      },
      {
        title: 'H4',
        desc: 'Heading 4',
        icon: MdLooks4,
        command: ({ editor, range }: any) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode('heading', { level: 4 })
            .run();
        },
      },
      {
        title: 'H5',
        desc: 'Heading 5',
        icon: MdLooks5,
        command: ({ editor, range }: any) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode('heading', { level: 5 })
            .run();
        },
      },
      {
        title: 'H6',
        desc: 'Heading 6',
        icon: MdLooks6,
        command: ({ editor, range }: any) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode('heading', { level: 6 })
            .run();
        },
      },
      {
        title: 'Quote',
        desc: 'Capture a quote',
        icon: MdFormatQuote,
        command: ({ editor, range }: any) => {
          editor.chain().focus().deleteRange(range).toggleBlockquote().run();
        },
      },
    ]
      .filter((item) =>
        item.title.toLowerCase().startsWith(query.toLowerCase())
      )
      .slice(0, 10);
  },

  render: () => {
    let component: any;
    let popup: any;

    return {
      onStart: (props: any) => {
        component = new ReactRenderer(CommandList, {
          props,
          editor: props.editor,
        });

        popup = tippy('body', {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: 'manual',
          placement: 'bottom-start',
        });
      },

      onUpdate(props: any) {
        component.updateProps(props);

        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        });
      },

      onKeyDown(props: any) {
        if (props.event.key === 'Escape') {
          popup[0].hide();

          return true;
        }

        return component.ref?.onKeyDown(props);
      },

      onExit() {
        popup[0].destroy();
        component.destroy();
      },
    };
  },
};
