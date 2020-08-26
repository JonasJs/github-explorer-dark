import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Container, Label } from './styles';

// Types
interface Props {
  image?: string;
  title: string;
  owner?: string;
  description: string;
  labels?: { name: string; color: string; url: string }[];
}

const Card: React.FC<Props> = ({
  image,
  owner,
  labels,
  title,
  description,
}) => {
  return (
    <Container>
      <img src={image} alt={owner} />
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
        {labels && (
          <div>
            {labels.map((label, key) => (
              <Label key={key} color={label.color}>
                {label.name}
              </Label>
            ))}
          </div>
        )}
      </div>
      <FiChevronRight size={20} />
    </Container>
  );
};

export default Card;
