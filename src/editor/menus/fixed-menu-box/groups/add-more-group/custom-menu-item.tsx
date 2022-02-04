import { Flex, MenuItem, MenuItemProps } from '@chakra-ui/react';

type Props = MenuItemProps & {};

const CustomMenuItem = ({ children, onClick }: Props) => {
  return (
    <MenuItem
      as={Flex}
      px={4}
      py={2}
      _hover={{ bg: 'gray.100', cursor: 'pointer' }}
      onClick={onClick}
    >
      {children}
    </MenuItem>
  );
};

export default CustomMenuItem;
