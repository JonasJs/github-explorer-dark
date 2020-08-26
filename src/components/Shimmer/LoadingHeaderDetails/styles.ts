import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 80px;

  > div {
    padding: 15px 40px 50px 12px;
    header {
      margin-bottom: 40px;
    }
    .flex {
      display: flex;
      .avatar-skeleton {
        width: 120px;
        height: 120px;
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
    .item {
      width: 160px;
      & + div {
        margin-left: 80px;
      }
      .row-skeleton {
        height: 12px;
        &:nth-child(1) {
          height: 35px;
        }
        &:nth-child(2) {
          margin-top: 10px;
          width: 50%;
          height: 10px;
        }
      }
    }
  }
`;
