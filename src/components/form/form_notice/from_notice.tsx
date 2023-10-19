import React from 'react';
import * as S from './form_notice.style';

const NoticeForm = () => {
  return (
    <S.NoticeWrap>
      <h2>챌린지 개설 안내</h2>
      <ul>
        <li>
          ✅ 시작일을 선택하면 자동으로{' '}
          <span className="bold">금주 일요일까지</span> 모집기간이 설정됩니다.
        </li>
        <li>
          ✅ <span className="bold">매주 월요일</span> 챌린지가 시작됩니다.
        </li>
        <li>
          ✅ 챌린지가 시작되면{' '} 
          <span className="bold">수정 / 삭제가 불가능</span> 하므로 신중하게
          개설해주세요!
        </li>
      </ul>
    </S.NoticeWrap>
  );
};

export default NoticeForm;
