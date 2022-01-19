import {
  Box,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Square,
} from '@chakra-ui/react';
import { Editor } from '@tiptap/react';
import { IconType } from 'react-icons/lib';
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiListCheck2,
  RiListOrdered,
  RiListUnordered,
} from 'react-icons/ri';

type IListKey = 'bulletList' | 'orderedList' | 'taskList';

const DATA_LIST: { key: IListKey; title: string; icon: IconType }[] = [
  {
    key: 'bulletList',
    icon: RiListUnordered,
    title: 'Bullet List',
  },
  {
    key: 'orderedList',
    icon: RiListOrdered,
    title: 'Ordered List',
  },
  {
    key: 'taskList',
    icon: RiListCheck2,
    title: 'Task List',
  },
];

type Props = {
  editor: Editor;
};

export const ListGroup = ({ editor }: Props) => {
  const _handleSetList = (key?: IListKey) => {
    const focusChain = editor.chain().focus();
    if (key === 'bulletList') {
      focusChain.toggleBulletList().run();
    }
    if (key === 'orderedList') {
      focusChain.toggleOrderedList().run();
    }
    if (key === 'taskList') {
      focusChain.toggleTaskList().run();
    }
  };

  const _renderHeadingList = () => {
    return DATA_LIST.map((it) => {
      const isActive = editor.isActive(it.key);

      return (
        <MenuItem
          icon={<Icon as={it.icon} display="block" />}
          onClick={() => _handleSetList(it.key)}
          bg={isActive ? 'blue.100' : 'inherit'}
          color={isActive ? 'blue.500' : 'inherit'}
        >
          {it.title}
        </MenuItem>
      );
    });
  };

  const activeItem =
    DATA_LIST.find((it) => {
      return editor.isActive(it.key);
    }) || DATA_LIST[0];

  return (
    <HStack spacing={0}>
      <Square
        _hover={{ bg: 'blue.100', cursor: 'pointer' }}
        p={1}
        rounded="base"
        bg={editor.isActive(activeItem.key) ? 'blue.100' : 'inherit'}
        color={editor.isActive(activeItem.key) ? 'blue.500' : 'inherit'}
        onClick={() => _handleSetList(activeItem.key)}
      >
        <Icon as={activeItem.icon} />
      </Square>
      <Menu isLazy>
        {({ isOpen }) => (
          <>
            <MenuButton _hover={{ bg: 'blue.100' }} py={1} rounded="base">
              <HStack>
                <Icon as={isOpen ? RiArrowUpSLine : RiArrowDownSLine} />
              </HStack>
            </MenuButton>
            <MenuList>{_renderHeadingList()}</MenuList>
          </>
        )}
      </Menu>
    </HStack>
  );
};
