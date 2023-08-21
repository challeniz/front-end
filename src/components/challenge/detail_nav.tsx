import React from 'react';
import styled from 'styled-components';
import {
  CiShare2,
  CiHeart,
  CiCalendarDate,
  CiUser,
  CiStar,
} from 'react-icons/ci'; // 아이콘 이름 수정

const DetailNavs = styled.div`
  position: sticky;
  top: 60px;
  width: 28%;
  height: 450px;
  border-radius: 20px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 20%);
  padding: 37px 40px;
  background-color: #fff;

  h5 {
    font-size: 13px;
    color: #868686;
    font-weight: 400;
    padding-bottom: 50px;
    display: flex;
    align-items: center;

    svg {
      width: 1.5em;
      height: 1.5em;
      padding-right: 4px;
    }
  }
`;
const DetailTag = styled.a`
  font-size: 16px;
  background-color: #787878;
  margin-right: 5px;
  color: #fff;
  border-radius: 15px;
  padding: 4px 16px;
`;

const H3Styled = styled.h3`
  font-size: 32px;
  padding: 25px 0 15px;
  font-weight: 600;
`;

const SubButton = styled.button`
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #339af0;
  border-radius: 10px;
  padding: 10px 13px;
  font-size: 16px;
  font-weight: 600;
  width: calc(100% / 2.1);
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const ButtonFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledCiShare2 = styled(CiShare2)`
  padding-right: 5px;
  width: 2em;
  height: 2em;
`;

const StyledCiHeart = styled(CiHeart)`
  padding-right: 5px;
  width: 2em;
  height: 2em;
`;

const MainButton = styled.button`
  width: 100%;
  background: linear-gradient(90deg, #74c0fc 0%, #228be6 100%);
  padding: 20px 0;
  border-radius: 15px;
  border: 2px solid #fff;
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 23px;
  transition: 0.2s;

  &:hover {
    border: 2px solid #228be6;
    transition: 0.2s;
  }
`;

const DetailInfo = styled.div`
  border-top: 1px solid #dbdbdb;
  padding-top: 25px;
`;
const PStyled = styled.p`
  color: #868686;
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 4px;
  display: flex;
  align-items: center;
`;

const StyledCiCalendar = styled(CiCalendarDate)`
  padding-right: 10px;
  width: 2em;
  height: 2em;
`;

const StyledCiUser = styled(CiUser)`
  padding-right: 10px;
  width: 2em;
  height: 2em;
`;

const DetailNav = () => {
  return (
    <DetailNavs>
      <div>
        <DetailTag>#운동</DetailTag>
        <DetailTag>#걷기</DetailTag>
      </div>
      <H3Styled>만보 걷기 챌린지</H3Styled>
      <h5>개설 챌리니 : 윥이님</h5>
      <ButtonWrap>
        <SubButton>
          <ButtonFlex>
            <StyledCiShare2 />
            공유하기
          </ButtonFlex>
        </SubButton>
        <SubButton>
          <ButtonFlex>
            <StyledCiHeart />
            찜하기
          </ButtonFlex>
        </SubButton>
      </ButtonWrap>
      <MainButton>챌린지 참여하기</MainButton>
      <DetailInfo>
        <PStyled>
          <StyledCiUser />
          현재 18명 참여 중
        </PStyled>
      </DetailInfo>
    </DetailNavs>
  );
};

export default DetailNav;
