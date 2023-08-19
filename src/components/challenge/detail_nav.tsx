import React from 'react';
import styled from 'styled-components';
import { CiShare2, CiHeart, CiCalendarDate, CiUser } from "react-icons/ci";// 아이콘 이름 수정

const DetailNavs = styled.div`
  position:sticky;
  top:147px;
  width:28%;
  height:480px;
  border-radius:20px;
  box-shadow: 0 -2px 9px 0 rgba(0, 0, 0, 20%);
  padding:37px 40px;
  background-color:#fff;
`
const DetailTag = styled.a`
  font-size: 14px;
  background-color: #787878;
  margin-right: 5px;
  color:#fff;
  border-radius:15px;
  padding:3px 15px;
`;

const H3Styled = styled.h3`
  font-size:32px;
  padding:25px 0 60px;
  font-weight:600;
`

const SubButton = styled.button`
  cursor:pointer;
  background-color:#fff;
  border:1px solid #339af0;
  border-radius:10px;
  padding:10px 13px;
  font-size:16px;
  font-weight:600;
  width:calc(100% / 2.1);
`

const ButtonWrap = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  margin-bottom:23px;
`
const ButtonFlex = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
`
const StyledCiShare2 = styled(CiShare2)`
  padding-right: 5px;
  width:2em;
  height:2em;
`;

const StyledCiHeart = styled(CiHeart)`
  padding-right: 5px;
  width:2em;
  height:2em;
`;

const MainButton = styled.button`
  width:100%;
  background:linear-gradient(90deg, #74C0FC 0%, #228BE6 100%);
  padding:20px 0;
  border-radius:15px;
  border:2px solid #fff;
  color:#fff;
  font-size:22px;
  font-weight:600;
  cursor:pointer;
  margin-bottom:30px;
  transition:.2s;

  &:hover {
    border:2px solid #228be6;
    transition:.2s;
  }
`

const DetailInfo = styled.div`
  border-top:1px solid #DBDBDB;
  padding-top:20px;
`
const PStyled = styled.p`
  color:#868686;
  font-size:17px;
  font-weight:500;
  padding-bottom:4px;
  display: flex;
  align-items: center;
`

const StyledCiCalendar = styled(CiCalendarDate)`
  padding-right: 10px;
  width:2em;
  height:2em;
`;

const StyledCiUser = styled(CiUser)`
  padding-right: 10px;
  width:2em;
  height:2em;
`;

const DetailNav = () => {
  return (
    <DetailNavs>
        <div>
          <DetailTag>#운동</DetailTag>
          <DetailTag>#걷기</DetailTag>
        </div>
        <H3Styled>만보 걷기 챌린지</H3Styled>
        <ButtonWrap>
          <SubButton>
            <ButtonFlex>
              <StyledCiShare2 />공유하기
            </ButtonFlex>
          </SubButton>
          <SubButton>
            <ButtonFlex>
              <StyledCiHeart />찜하기
            </ButtonFlex>
          </SubButton>
        </ButtonWrap>
        <MainButton>챌린지 참여하기</MainButton>
        <DetailInfo>
          <PStyled><StyledCiCalendar />2023.08.01 ~ 2023.08.31</PStyled> 
          <PStyled><StyledCiUser />현재 18명 참여 중</PStyled>
        </DetailInfo>
    </DetailNavs>
  )
};

export default DetailNav;
