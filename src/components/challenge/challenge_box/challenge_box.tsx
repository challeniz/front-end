import React, { useState, useEffect } from 'react';
import * as S from './challenge_box.style';
import { BsCalendarRange } from 'react-icons/bs';
import { apiInstance } from '../../../utils/api';
import { ROUTE } from '../../../routes';
import { Link } from 'react-router-dom';
import ListTab from '../list_tab/list_tab';
import HeartImg from '../../../assets/image/heart_red.png';
import EmptyHeartImg from '../../../assets/image/heart.png';

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

export interface ChallengeBoxProps {
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
  challenges?: Challenge[];
}

const ChallengeBox: React.FC<ChallengeBoxProps> = ({
  selectedCategory,
  handleCategoryClick,
}) => {
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);
  const [wishCount, setWishCount] = useState(808);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get('/challenges/list');
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
    fetchData();
  }, []);

  const wishCountHandler = async (challengeId: string) => {
    const updatedChallengeList = challengeList.map((challenge) => {
      if (challenge.id === challengeId) {
        const newLikeValue = !challenge.like;
        try {
          if (newLikeValue) {
            apiInstance.patch(`/challenges/zzim/${challenge.id}`);
          } else {
            apiInstance.patch(`/challenges/zzim/${challenge.id}`);
          }
        } catch (error) {
          console.error(`Error updating challenge like status:`, error);
        }
        return {
          ...challenge,
          like: newLikeValue,
        };
      }
      return challenge;
    });

    setChallengeList(updatedChallengeList);
    setWishCount((prevCount) => prevCount + 1);
  };

  const filteredChallengeList = selectedCategory
    ? challengeList.filter(
        (challenge) => challenge.category === selectedCategory
      )
    : challengeList;

  return (
    <S.ListWrap>
      <S.ContentsWrap>
        {filteredChallengeList.map((challenge) => (
          <S.ContentWrap key={challenge.id}>
            <S.ImgStyled>
              <img src="" alt={`Challenge`} className="thumbnail" />
              <S.StyledHeartButton
                src={challenge.like ? HeartImg : EmptyHeartImg}
                alt={challenge.like ? 'Liked' : 'Not Liked'}
                onClick={() => wishCountHandler(challenge.id)}
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
