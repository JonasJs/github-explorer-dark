import styled from 'styled-components';

export default styled.div`
  background: var(--white);
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);
  &.no-shadow {
    box-shadow: none;
    background: none;
  }
`;
