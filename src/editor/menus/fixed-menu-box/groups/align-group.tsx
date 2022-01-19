import {
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { Editor } from '@tiptap/react';
import { IconType } from 'react-icons/lib';
import {
  RiAlignCenter,
  RiAlignJustify,
  RiAlignLeft,
  RiAlignRight,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';

type IAlignKey = 'left' | 'center' | 'right' | 'justify';

const DATA_LIST: { key: IAlignKey; title: string; icon: IconType }[] = [
  {
    key: 'left',
    icon: RiAlignLeft,
    title: 'Left',
  },
  {
    key: 'center',
    icon: RiAlignCenter,
    title: 'Center',
  },
  {
    key: 'right',
    icon: RiAlignRight,
    title: 'Right',
  },
  {
    key: 'justify',
    icon: RiAlignJustify,
    title: 'Justify',
  },
];

type Props = {
  editor: Editor;
};

export const AlignGroup = ({ editor }: Props) => {
  const _handleSetAlign = (key: IAlignKey) => {
    const focusChain = editor.chain().focus();
    focusChain.setTextAlign(key).run();
  };

  const _renderHeadingList = () => {
    return DATA_LIST.map((it) => {
      const isActive = editor.isActive({ textAlign: it.key });

      return (
        <MenuItem
          key={it.key}
          icon={<Icon as={it.icon} display="block" />}
          onClick={() => _handleSetAlign(it.key)}
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
      return editor.isActive({ textAlign: it.key });
    }) || DATA_LIST[0];

  return (
    <Menu isLazy>
      {({ isOpen }) => (
        <>
          <MenuButton _hover={{ bg: 'blue.100' }} p={1} rounded="base">
            <HStack spacing={1}>
              <Icon as={activeItem?.icon} />
              <Icon as={isOpen ? RiArrowUpSLine : RiArrowDownSLine} />
            </HStack>
          </MenuButton>
          <MenuList>{_renderHeadingList()}</MenuList>
        </>
      )}
    </Menu>
  );
};
