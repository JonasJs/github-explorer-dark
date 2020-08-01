import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Container } from './styles';

interface Props {
  image: string;
  title: string;
  owner: string;
  description: string;
}
const Repository: React.FC<Props> = ({ image, owner, title, description }) => {
  return (
    <Container href="/">
      <img src={image} alt={owner} />
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <FiChevronRight size={20} />
    </Container>
  );
};

export default Repository;
