import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 80px;

  > div {
    padding: 16px;
    .flex {
      display: flex;
      .avatar-skeleton {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        flex-shrink: 0;
        margin-right: 24px;
      }
      .column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        .row-skeleton {
          height: 18px;
          background-image: linear-gradient(
            -90deg,
            #e7edf1 0%,
            #f8f8f8 50%,
            #e7edf1 100%
          );
          &:nth-child(1) {
            width: 30%;
          }
          &:nth-child(2) {
            margin-top: 10px;
            height: 12px;
            width: 70%;
          }
        }
      }
    }
  }
`;
