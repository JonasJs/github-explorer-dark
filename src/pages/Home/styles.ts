import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  max-width: 440px;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;

  color: #ffffff;
  margin: 100px 0 40px 0;
`;

export const Form = styled.form`
  max-width: 700px;
  margin-bottom: 120px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
  }

  button {
    width: 210px;
    height: 70px;
    background: var(--secondary);
    border: 0;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#6E6A81')};
    }
  }
`;
