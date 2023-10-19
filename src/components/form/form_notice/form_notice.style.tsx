import styled from 'styled-components';

export const NoticeWrap = styled.div`
  padding: 40px;
  background-color: #def2ff;
  width: 100%;
  margin-bottom: 60px;
  h2 {
    font-size: 23px;
    padding-bottom: 30px;
  }
  li {
    line-height: 36px;
    font-size: 18px;
    letter-spacing: 1px; /* 오타 수정: letter-space → letter-spacing */
    span.bold {
      font-weight: 600;
    }
    span.light {
      font-weight: 400;
      font-size: 15px;
      color: #6f6f6f;
    }
  }
  
  @media (max-width: 420px) {
    h2 {
      font-size: 18px;
      padding-bottom: 20px;
    }
    li{
      line-height: 24px;
      font-size: 14px;
      letter-spacing: 1px;

      }
    }
  }
`;
