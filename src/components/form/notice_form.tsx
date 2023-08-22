import React from 'react';
import styled from 'styled-components';
import WhiteBox from './white_box';

const NoticeWrap = styled.div`
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
    letter-space: 1px;
    span.bold {
      font-weight: 600;
    }
    span.light {
      font-weight: 400;
      font-size: 15px;
      color: #6f6f6f;
    }
  }
`;

const NoticeForm = () => {
  return (
    <NoticeWrap>
      <h2>챌린지 개설 안내</h2>
      <ul>
        <li>✅ 챌린지 모집기간은 지난 날짜를 선택할 수 없습니다.</li>
        <li>
          ✅ 챌린지 모집기간은 <span className="bold">4일</span>입니다. -{' '}
          <span className="light">예) 모집기간 : 2023.08.01 ~ 2023.08.04</span>
        </li>
        <li>
          ✅ 챌린지 모집이 끝나는 <span className="bold">다음 날</span> 챌린지가
          시작됩니다. -{' '}
          <span className="light">예) 챌린지 시작 날짜 : 2023.08.05</span>
        </li>
        <li>
          ✅ 챌린지 인원이 생기면{' '}
          <span className="bold">수정 / 삭제가 불가능</span> 하므로 신중하게
          개설해주세요!
        </li>
      </ul>
    </NoticeWrap>
  );
};

export default NoticeForm;
