import React, { useState, useEffect } from 'react';
import * as S from './challenge_box.style';
import { BsCalendarRange } from 'react-icons/bs';
import { apiInstance } from '../../../utils/api';
import { ROUTE } from '../../../routes';
import { Link } from 'react-router-dom';
import EmptyHeartImg from '../../../assets/image/heart.png';
import HeartImg from '../../../assets/image/heart_red.png';
import { AiOutlineUser } from 'react-icons/ai';
import Countdown from '../../../hook/Countdown/Countdown';
import classnames from 'classnames';

export interface Challenge {
  like: boolean;
  title: string;
  start_date: string;
  end_date: string;
  tag: string[];
  id: string;
  category: string;
  mainImg: string;
  like_users: string[];
  recru_open_date: string;
  users: string[];
  status: string;
}

export interface ChallengeBoxProps {
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
  challenges?: Challenge[];
  filteredChallenges?: Challenge[];
}

const ChallengeBox: React.FC<ChallengeBoxProps> = ({
  selectedCategory,
  handleCategoryClick,
  challenges = [],
  filteredChallenges = challenges,
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
            like_users: challenge.like_users,
            users: challenge.users || [],
            status: challenge.status,
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
    try {
      const updatedChallengeList = challengeList.map((challenge) => {
        if (challenge.id === challengeId) {
          const newLikeValue = challenge.like;
          return {
            ...challenge,
            like: newLikeValue,
          };
        }
        return challenge;
      });

      setChallengeList(updatedChallengeList);
      await apiInstance.patch(`/challenges/zzim/${challengeId}`);
    } catch (error) {
      console.error(`Error updating challenge like status:`, error);
    }
  };

  const filteredChallengeList = selectedCategory
    ? filteredChallenges.filter((challenge) => {
        return challenge.category === selectedCategory;
      })
    : filteredChallenges;

  return (
    <S.ListWrap>
      <S.ContentsWrap>
        {filteredChallengeList.map((challenge) => (
          <S.ContentWrap key={challenge.id}>
            <S.ImgStyled>
              <img src={challenge.mainImg} alt="Challenge" />
              <S.StyledHeartButton
                src={challenge.like ? HeartImg : EmptyHeartImg}
                alt={challenge.like ? 'Liked' : 'Not Liked'}
                onClick={() => wishCountHandler(challenge.id)}
              />
              <Countdown targetDate={new Date(challenge.start_date)} />
              <S.InfoWrap>
                <S.Status
                  className={classnames({
                    yellow: challenge.status === '모집 중',
                    blue: challenge.status === '진행 중',
                    black: challenge.status === '완료',
                  })}
                >
                  {challenge.status}
                </S.Status>
              </S.InfoWrap>
            </S.ImgStyled>
            <S.TabWrap>
              <S.Users>
                <AiOutlineUser />
                {challenge.users.length}명
              </S.Users>
              <div>
                {challenge.tag.map((tag, index) => (
                  <S.TabStyled key={index}>{tag}</S.TabStyled>
                ))}
              </div>
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
