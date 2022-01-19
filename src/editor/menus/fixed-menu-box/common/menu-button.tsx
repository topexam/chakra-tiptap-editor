import { Square, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';
import { RiBold } from 'react-icons/ri';

type Props = {
  iconType: IconType;
  isActive: boolean;
  onClick: () => void;
};

export const MenuButton = ({ iconType, isActive, onClick }: Props) => {
  return (
    <Square
      rounded="base"
      p="2px"
      _hover={{ bg: 'blue.100', cursor: 'pointer' }}
      color={isActive ? 'blue.500' : 'inherit'}
      onClick={onClick}
    >
      <Icon as={iconType} boxSize="18px" />
    </Square>
  );
};
