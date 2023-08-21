import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeartButton from './heart';
// import axios from 'axios'; // axios를 임포트해야 합니다.

const ContentWrap = styled.div`
  text-align: left;
`;

const ImgStyled = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: #d9d9d9;
`;

const TabWrap = styled.div`
  margin: 20px 0;
`;

const TabStyled = styled.a`
  background-color: #d9d9d9;
  border-radius: 10px;
  padding: 4px 15px;
  font-size: 13px;
  margin-right: 5px;
`;

const H3Styled = styled.h3`
  font-size: 23px;
  padding-bottom: 10px;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const H4Styled = styled.h4`
  font-size: 15px;
  font-weight: 500;
`;

const ListContent: React.FC = () => {
  const [like, setLike] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const res = await axios.get(/* ... */); // API 엔드포인트를 입력하세요
  //       if (res.data.type === 'liked') setLike(true);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const toggleLike = async () => {
    try {
      // const res = await axios.post(/* ... */); // [POST] 사용자가 좋아요를 누름 -> DB 갱신
      setLike(!like);
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  return (
    <ContentWrap>
      <ImgStyled>
        <HeartButton like={like} onClick={toggleLike} />
      </ImgStyled>
      <TabWrap>
        <TabStyled>#운동</TabStyled>
        <TabStyled>#걷기</TabStyled>
      </TabWrap>
      <H3Styled>하루 만보 걷기 챌린지</H3Styled>
      <H4Styled>2023.08.01 ~ 2023.08.31</H4Styled>
    </ContentWrap>
  );    
};

export default ListContent;
