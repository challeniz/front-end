import React from 'react';
import * as S from './form_notice.style';
import WhiteBox from '../white_box/white_box/white_box';

const NoticeForm = () => {
  return (
    <S.NoticeWrap>
      <h2>챌린지 개설 안내</h2>
      <ul>
        <li>
          ✅ 모집기간은 시작일 부터{' '}
          <span className="bold">금주 일요일까지 </span>입니다.
        </li>
        <li>
          ✅ 챌린지 기간은 <span className="bold">'주'단위</span>로 선택할 수
          있습니다.
        </li>
        <li>
          ✅ 모집기간이 끝나면 챌린지를 수정/삭제 할 수 없으므로 신중하게
          개설해주세요!
        </li>
      </ul>
    </S.NoticeWrap>
  );
};

export default NoticeForm;
