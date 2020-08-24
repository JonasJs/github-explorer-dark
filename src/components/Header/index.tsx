import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

// Components
import ButtonNavigation from '../ButtonNavigation';

// Images
import logo from '../../assets/Logo.svg';

// Syles
import { Container } from './styles';

// Types
interface Props {
  goBack?: boolean;
  href?: string;
}

const Header: React.FC<Props> = ({ goBack = false, href = '/' }) => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="github_explorer" />
      </Link>
      {goBack && (
        <Link to={href}>
          <ButtonNavigation iconLeft={FiChevronLeft}>Back</ButtonNavigation>
        </Link>
      )}
    </Container>
  );
};

export default Header;
