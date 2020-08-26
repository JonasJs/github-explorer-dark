import styled from 'styled-components';

export const RepositoryInfo = styled.div`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 2px solid var(--white);
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: var(--white);
      }

      p {
        font-size: 18px;
        color: var(--light-gray);
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: var(--white);
      }

      span {
        display: block;
        margin-top: 4px;
        color: var(--light-gray);
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  a + a {
    margin-top: 16px;
    display: block;
  }
`;

export const Title = styled.h1`
  color: var(--white);
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 40px;
`;
