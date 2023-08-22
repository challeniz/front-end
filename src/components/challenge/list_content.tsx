import React, { useState } from 'react';
import styled from 'styled-components';
import HeartButton from './heart';
import { BsCalendarRange } from 'react-icons/bs';

const ContentWrap = styled.div`
  text-align: left;
`;

const ImgStyled = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  background-color: #d9d9d9;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid #eeeeee;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledHeartButton = styled(HeartButton)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
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
  font-size: 25px;
  padding-bottom: 20px;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  letter-spacing: -0.8px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const H4Styled = styled.h4`
  font-size: 15px;
  font-weight: 400;
  color: #686868;
  display: flex;
  align-items: center;

  svg {
    width: 1.2em;
    height: 1.2em;
    padding-right: 5px;
  }
`;

interface ListContentProps {
  challenge: {
    title: string;
    startdate: string;
    enddate: string;
    img: string;
    coment: string;
    tag: string;
  };
}

const ListContent: React.FC<ListContentProps> = ({ challenge }) => {
  const [like, setLike] = useState(false);

  const toggleLike = async () => {
    try {
      // 좋아요 관련 처리를 진행
      setLike(!like);
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  return (
    <ContentWrap>
      <ImgStyled>
        <img src={challenge.img} alt={`Challenge`} />
        <StyledHeartButton like={like} onClick={toggleLike} />
      </ImgStyled>
      <TabWrap>
        {challenge.tag.split(',').map((tag, index) => (
          <TabStyled key={index}>{tag}</TabStyled>
        ))}
      </TabWrap>
      <H3Styled>{challenge.title}</H3Styled>
      <H4Styled>
        <BsCalendarRange />
        {challenge.startdate} ~ {challenge.enddate}
      </H4Styled>
    </ContentWrap>
  );
};

export default ListContent;
