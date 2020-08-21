import React from 'react';
import { IconBaseProps } from 'react-icons';

// Styles
import { Container } from './styles';

// Types
interface Props {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  iconLeft?: React.ComponentType<IconBaseProps>;
  iconRight?: React.ComponentType<IconBaseProps>;
}

const ButtonNavigation: React.FC<Props> = ({
  iconLeft: IconLeft,
  iconRight: IconRight,
  onClick,
  children,
}) => {
  return (
    <Container onClick={onClick}>
      {IconLeft && <IconLeft size={20} />}
      <p>{children}</p>
      {IconRight && <IconRight size={20} />}
    </Container>
  );
};

export default ButtonNavigation;
