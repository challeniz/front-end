import React from 'react';
import * as S from './form_agree.style';
import WhiteBox from '../white_box/white_box/white_box';
import WhiteBoxTitle from '../white_box/white_box_title/white_box_title';
import WhiteBoxContents from '../white_box/white_box_contents/white_box_contents';

const FormAgreeBox = () => {
  return (
    <>
      <WhiteBox>
        <WhiteBoxTitle>약관 동의</WhiteBoxTitle>
        <WhiteBoxContents>
          <p>
            회사는 개설챌린지의 주제를 검토할 수 있으며, 회사의 판단하에
            챌린지를 삭제할 수 있습니다. 삭제할 수 있는 경우는 아래와 같습니다.
          </p>
          <S.StyledUl>
            <li>2명 이상의 회원이 신고한 경우</li>
            <li>다른 챌린지와 지나치게 유사한 경우</li>
            <li>타인에게 불쾌감을 줄 수 있는 주제인 경우</li>
            <li>그외 회사가 판단하기에 부적절한 경우</li>
          </S.StyledUl>
          <p>
            챌린지를 삭제할 때, 부적절한 챌린지로 판단되는 경우 서비스 이용을
            영구정지 할 수 있습니다.
          </p>
          <S.AgreeBox>
            <p className="agree-title">약관동의</p>
            <input type="checkbox"></input>
            <p className="agree-text">
              위의 내용을 모두 읽어보았으며, 이에 모두 동의합니다.
            </p>
          </S.AgreeBox>
        </WhiteBoxContents>
      </WhiteBox>
    </>
  );
};

export default FormAgreeBox;
