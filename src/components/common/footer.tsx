import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <div>
      <FooterBox>
        <h1>Logo</h1>
        <FooterTxt>
          <span>(주)챌리니즈</span>
          <span>대표자 : 김갓생</span>
        </FooterTxt>
        <FooterAddress>
          <address>
            주소: 서울 성동구 아차산로17길 48 성수낙낙 2층 엘리스랩{' '}
          </address>
          <span>
            대표번호: <a href="tel:021234567">02-123-4567</a>
          </span>
        </FooterAddress>

        <Copyright>ⓒ Challines Corporation. All Rights reserved.</Copyright>
      </FooterBox>
    </div>
  );
};

const FooterBox = styled.div`
  background-color: #ccc;
  text-align: center;

  h1 {
    color: #eaeaea;
    text-align: center;
    font-size: 40px;
    margin: 0;
  }
`;

const FooterTxt = styled.div`
  text-align: left;

  span {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    line-height: 1.5em;
    color: #eaeaea;
    margin-right: 15px;
    margin-bottom: 4px;
    display: block;
  }
`;
const FooterAddress = styled.div`
  text-align: left;

  address {
    display: inline-block;
    vertical-align: top;
    font-style: normal;
    font-size: 14px;
    line-height: 1.5em;
    color: #eaeaea;
    letter-spacing: 1px;
  }
  span {
    display: block;
    vertical-align: top;
    font-style: normal;
    font-size: 14px;
    line-height: 1.5em;
    color: #eaeaea;
    margin-right: 8px;
    letter-spacing: 1px;
  }
`;

const Copyright = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #d8d8d8;
`;
export default Footer;
