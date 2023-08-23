import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ROUTE } from '../../routes';
import { Link } from 'react-router-dom';
import Wrapper from '../common/wrapper/wrapper';
import useImageUploader from '../../hook/imgfiler';

const PageBox = styled.div`
  width: 100%;
  height: 299px;
  border-radius: 15px;
  background-color: #ebf2ff;
  display: flex;
  padding: 37px 86px;
  align-items: center;

  a {
    margin-left: auto;
  }
`;

const AvatarWrapper = styled.div`
  width: 226px;
  height: 226px;
  margin-right: 86px;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const PageTxt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  li:nth-child(1) {
    margin-bottom: 25px;
    font-weight: 400;
    font-size: 33px;
    letter-spacing: 5px;

    span {
      font-size: 36px;
      font-weight: 700;
    }
  }

  li:nth-child(2) {
    font-size: 27px;
    letter-spacing: 1px;
    span {
      font-size: 27px;
      font-weight: 700;
    }
  }
`;

const PageBtn = styled.button`
  border-radius: 15px;
  background-color: #339af0;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin-left: auto;
  padding: 20px 50px;
`;

const InputStyled = styled.input`
  display: none;
`;

interface MyInfoProps {}

const MyInfo: React.FC<MyInfoProps> = () => {
  const { imgSrc, fileInput, onChange } = useImageUploader(
    'https://i.ibb.co/rbPbb9z/3.png'
  );
  return (
    <Wrapper>
      <PageBox>
        <AvatarWrapper
          onClick={() => {
            if (fileInput.current) {
              fileInput.current.click();
            }
          }}
        >
          <AvatarImage src={imgSrc} />
        </AvatarWrapper>
        <InputStyled type="file" ref={fileInput} onChange={onChange} />
        <PageTxt>
          <ul>
            <li>
              <span>김챌린지</span> 님
            </li>
            <li>
              현재등급은 <span>신입챌리니</span>입니다.
            </li>
          </ul>
        </PageTxt>
        <Link to={ROUTE.MYPRIVACY.link}>
          <PageBtn>내 정보 수정하기</PageBtn>
        </Link>
      </PageBox>
    </Wrapper>
  );
};

export default MyInfo;
