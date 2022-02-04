import { Square, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

type Props = {
  iconType: IconType;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
};

const generateState = (isActive: boolean, isDisabled: boolean) => {
  if (isDisabled) return ['gray.300', 'inherit', 'not-allowed'];
  if (isActive) return ['blue.500', 'blue.100', 'pointer'];
  return ['inherit', 'blue.100', 'pointer'];
};

export const MenuButton = ({
  iconType,
  isActive = false,
  isDisabled = false,
  onClick,
}: Props) => {
  const [color, bgColor, cursor] = generateState(isActive, isDisabled);
  return (
    <Square
      rounded="base"
      p="2px"
      color={color}
      _hover={{ bg: bgColor, cursor }}
      onClick={() => !isDisabled && onClick?.()}
    >
      <Icon as={iconType} boxSize="18px" />
    </Square>
  );
};
