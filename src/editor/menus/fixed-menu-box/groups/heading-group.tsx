import {
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { Editor } from '@tiptap/react';
import { IconType } from 'react-icons/lib';
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiH1,
  RiH2,
  RiH3,
  RiH4,
  RiH5,
  RiH6,
  RiParagraph,
} from 'react-icons/ri';

type IHeadingLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;

const DATA_LIST: { level: IHeadingLevel; title: string; icon: IconType }[] = [
  {
    level: 0,
    icon: RiParagraph,
    title: 'Paragraph',
  },
  {
    level: 1,
    icon: RiH1,
    title: 'Heading 1',
  },
  {
    level: 2,
    icon: RiH2,
    title: 'Heading 2',
  },
  {
    level: 3,
    icon: RiH3,
    title: 'Heading 3',
  },
  {
    level: 4,
    icon: RiH4,
    title: 'Heading 4',
  },
  {
    level: 5,
    icon: RiH5,
    title: 'Heading 5',
  },
  {
    level: 6,
    icon: RiH6,
    title: 'Heading 6',
  },
];

type Props = {
  editor: Editor;
};

export const HeadingGroup = ({ editor }: Props) => {
  const _handleToggleHeading = (level: IHeadingLevel) => {
    const focusChain = editor.chain().focus();
    if (!level) focusChain.setParagraph().run();
    else focusChain.toggleHeading({ level }).run();
  };

  const _renderHeadingList = () => {
    return DATA_LIST.map((it) => {
      const isActive = it.level
        ? editor.isActive('heading', { level: it.level })
        : editor.isActive('paragraph');

      return (
        <MenuItem
          key={it.level}
          icon={<Icon as={it.icon} display="block" />}
          onClick={() => _handleToggleHeading(it.level)}
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
      if (!it.level) return editor.isActive('paragraph');
      return editor.isActive('heading', { level: it.level });
    }) || DATA_LIST[0];

  return (
    <Menu isLazy>
      {({ isOpen }) => (
        <>
          <MenuButton
            borderWidth={1}
            bg="white"
            px={2}
            rounded="base"
            _hover={{ bg: 'blue.100' }}
          >
            <HStack>
              <Text>{activeItem?.title || 'Heading'}</Text>
              <Icon as={isOpen ? RiArrowUpSLine : RiArrowDownSLine} />
            </HStack>
          </MenuButton>
          <MenuList>{_renderHeadingList()}</MenuList>
        </>
      )}
    </Menu>
  );
};
