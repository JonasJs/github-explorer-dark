import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 100%;
  padding: 16px;
  background: var(--white);
  border-radius: 5px;

  text-decoration: none;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  & + a {
    margin-top: 16px;
  }

  &:hover {
    transform: translateX(10px);
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin-left: 16px;

    strong {
      font-size: 20px;
      color: var(--primary);
    }

    p {
      margin-top: 4px;
      color: var(--light-gray);
    }
  }

  svg {
    margin-left: auto;
    color: var(--light-gray);
  }
`;
