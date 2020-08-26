import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 16px;
  background: var(--white);
  border-radius: 5px;

  text-decoration: none;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

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
    div {
      margin: 8px 0 0 0;
      display: flex;
    }
  }

  svg {
    margin-left: auto;
    color: var(--light-gray);
  }
`;

export const Label = styled.p`
  background: #${({ color }) => color};
  color: var(--primary);
  padding: 0 7px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  border: 1px solid transparent;
  border-radius: 2em;
  margin-right: 8px;
`;
