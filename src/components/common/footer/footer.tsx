import React from 'react';
import * as S from './footer.style';
import LogoImage from '../../../assets/image/logo.png';
import TopButton from '../top_button/top_button';

const Footer = () => {
  return (
    <S.FooterWrap>
      <TopButton />
      <S.FooterBox>
        <S.Logo>
          <S.LogoImg src={LogoImage} alt="Logo" />
        </S.Logo>
        <S.TextWrap>
          <S.FooterTxt>
            <span>(주)챌리니즈</span>
            <span>대표자 : 김갓생</span>
          </S.FooterTxt>
          <S.FooterAddress>
            <address>
              주소: 서울 성동구 아차산로17길 48 성수낙낙 2층 엘리스랩{' '}
            </address>
            <span>
              대표번호: <a href="tel:021234567">02-123-4567</a>
            </span>
          </S.FooterAddress>
        </S.TextWrap>

        <S.Copyright>ⓒ Challines Corporation. All Rights reserved.</S.Copyright>
      </S.FooterBox>
    </S.FooterWrap>
  );
};

export default Footer;
