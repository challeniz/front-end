// list_content.tsx
import React, { useState, useEffect } from 'react';
import * as S from './challenge_box.style';
import { BsCalendarRange } from 'react-icons/bs';
import { apiInstance } from '../../../utils/api';
import { ROUTE } from '../../../routes';
import { Link } from 'react-router-dom';
import ListTab from '../list_tab/list_tab';

// 예시로 Challenge 타입을 정의
export interface Challenge {
  like: boolean;
  title: string;
  start_date: string;
  end_date: string;
  tag: string[];
  id: string;
  category: string;
}

interface ChallengeBoxProps {
  selectedCategory: string;
  handleCategoryClick: (category: string) => void; // 이 부분이 추가되어야 합니다.
}

const ChallengeBox: React.FC<ChallengeBoxProps> = ({
  selectedCategory,
  handleCategoryClick,
}) => {
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get('/challenges/');
        const data = response.data;

        if (data.length > 0) {
          const challenges = data.map((challenge: any) => ({
            like: false,
            title: challenge.title,
            start_date: new Date(challenge.start_date).toLocaleDateString(),
            end_date: new Date(challenge.end_date).toLocaleDateString(),
            tag: challenge.tag,
            id: challenge._id,
            category: challenge.category,
          }));
          setChallengeList(challenges);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // 초기 로딩 시 데이터 가져오기
    fetchData();
  }, []);

  const toggleLike = (index: number) => {
    setChallengeList((prevList) => {
      const updatedList = [...prevList];
      updatedList[index].like = !updatedList[index].like;
      return updatedList;
    });
  };

  const filteredChallengeList = selectedCategory
    ? challengeList.filter(
        (challenge) => challenge.category === selectedCategory
      )
    : challengeList;

  return (
    <S.ListWrap>
      <S.ContentsWrap>
        {filteredChallengeList.map((challenge, index) => (
          <S.ContentWrap key={index}>
            <S.ImgStyled>
              <img src="" alt={`Challenge`} />
              <S.StyledHeartButton
                like={challenge.like}
                onClick={() => toggleLike(index)}
              />
            </S.ImgStyled>
            <S.TabWrap>
              {challenge.tag.map((tag, index) => (
                <S.TabStyled key={index}>{tag}</S.TabStyled>
              ))}
            </S.TabWrap>
            <Link to={`${ROUTE.DETAILPAGE.link}/${challenge.id}`}>
              <S.H3Styled>{challenge.title}</S.H3Styled>
            </Link>
            <S.H4Styled>
              <BsCalendarRange />
              {challenge.start_date} ~ {challenge.end_date}
            </S.H4Styled>
          </S.ContentWrap>
        ))}
      </S.ContentsWrap>
    </S.ListWrap>
  );
};

export default ChallengeBox;
