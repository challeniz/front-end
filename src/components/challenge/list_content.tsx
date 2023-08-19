import React, { useState } from 'react';
import styled from 'styled-components';
import HeartButton from './heart';
import challengeData from '../../data/data.json';

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

  const toggleLike = async () => {
    try {
      // 여기서 좋아요 관련 처리를 진행
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
        {challengeData[1].tag.split(',').map((tag, index) => (
          <TabStyled key={index}>{tag}</TabStyled>
        ))}
      </TabWrap>
      <H3Styled>{challengeData[1].title}</H3Styled>
      <H4Styled>
        {challengeData[1].startdate} ~ {challengeData[1].enddate}
      </H4Styled>
    </ContentWrap>
  );
};

export default ListContent;
