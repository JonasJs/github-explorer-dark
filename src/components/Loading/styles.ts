import styled, { css } from 'styled-components';

interface Props {
  show: boolean;
}

export const Container = styled.div<Props>`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  background: #2f333a;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: fadeOut 1s;
  visibility: hidden;
  ${({ show }) =>
    show &&
    css`
      position: fixed;
      animation: fadeIn 1s;
      visibility: visible;
    `}

  img {
    width: 150px;
  }
`;
