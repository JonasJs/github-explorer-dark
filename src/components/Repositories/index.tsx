import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Container } from './styles';

const Repositories: React.FC = () => {
  return (
    <Container>
      <a href="/">
        <img
          src="https://avatars0.githubusercontent.com/u/11879767?s=460&u=8a608e932243fd5ec54b61e902540e4181f36c0b&v=4"
          alt="JonasJs"
        />
        <div>
          <strong>JonasJs</strong>
          <p>Description of repository</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Container>
  );
};

export default Repositories;
