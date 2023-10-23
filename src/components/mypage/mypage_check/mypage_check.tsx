import React, { useState, useEffect } from 'react';
import { apiInstance } from '../../../utils/api';
import ModalBasic from '../../common/modal/modal';
import * as S from './mypage_check.style';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import moment from 'moment';

interface MypageCheckProps {}

interface Challenge {
  recru_open_date: string;
  recru_end_date: string;
  start_date: string;
  end_date: string;
  title: string;
  posts: [];
  post_date: string;
}
interface updatedChallenge {
  challengeData: {
    description: string;
    img: string;
  };
  postDate: string;
  name?: string;
}
interface dateInfo {
  post_date: string;
}
const MypageCheck= () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);
  const [challengeData, setChallengeData] = useState<updatedChallenge>();
  const [challengeInfo, setChallengeInfo] = useState<dateInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await apiInstance.get('/posts/my');
        const data = response.data;
       
        if (data.length > 0) {
          const challenges = data.map((challenge: any) => ({
            title: challenge.title,
            recru_open_date: challenge.recru_open_date,
            recru_end_date: challenge.recru_end_date,
            start_date: challenge.start_date,
            end_date: challenge.end_date,

            posts: challenge.posts.length > 0 ? challenge.posts : [],
          }));
          const date = challenges.map((challenge: any) => { 
            const post_dates = challenge.posts.map(
              (post: any) => post.post_date
            );    console.log(post_dates)       
            return {
              title: challenge.title,
              post_dates: post_dates,
            };
          });

          setChallengeList(challenges);
          setChallengeInfo(date);
        }
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    };

    fetchData();
  }, []);

  const handleChallengeClick = (post: any) => {
    const postDate = new Date(post.post_date);
    
    const formattedDate = `${postDate.getFullYear()}년 ${
      postDate.getMonth() + 1
    }월 ${postDate.getDate()}일`;

    const challengeData = {
      description: post.description,
      img: post.img,
    };

    const updatedChallenge: updatedChallenge = {
      challengeData,
      postDate: formattedDate,
      name: post.user.name,
    };
    setChallengeData(updatedChallenge);

    showModal();
  };
  const showModal = () => {
    setModalOpen(true);
  };

  // 각 타이틀별로 그룹핑
  const groupedChallenges: { [key: string]: [] } = {};
  challengeList.forEach((challenge) => {
    if (challenge.posts.length > 0) {
      groupedChallenges[challenge.title] = challenge.posts;
    } else {
      groupedChallenges[challenge.title] = [];
    }
  });
  const getEventsForChallenge = (challenge: Challenge) => {
    const events = challenge.posts.map((post: any) => {
      const postDate = moment(post.post_date).format();
      return {
        title: '모집기간',
        start: postDate,
        end: postDate,
        classNames: 'event1-class',
      };
    });

    return events;
  };

  return (
  <> 
      <S.AuthWrap>
        {Object.entries(groupedChallenges).map(([title, challenges], index) => {
          const currentChallenge = challengeList.find(
            (challenge) => challenge.title === title
          );

          if (!currentChallenge) return null;

          return (
            <div key={index}>
              <h1 style={{ fontSize: '24px', padding: '20px 0 10px 20px' }}>
                {title}
              </h1>
              <S.FullCalendarDisplay>
                <S.FullCalendarDiv>
                  <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    weekends={true}
                    locale="ko"
                    events={getEventsForChallenge(currentChallenge)}
                    height="210px"
                  />
                </S.FullCalendarDiv>
                <S.AuthGrid>
                  {challenges.map((challenge, index) => (
                    <S.ImgWrap
                      key={index}
                      onClick={() => handleChallengeClick(challenge)}
                    >
                      <img
                        src={challengeData?.challengeData.img}
                        alt="Challenge Image"
                      />
                    </S.ImgWrap>
                  ))}
                </S.AuthGrid>
              </S.FullCalendarDisplay>
            </div>
          );
        })}

        {modalOpen && challengeData && (
          <ModalBasic
            setModalOpen={setModalOpen}
            challengeData={challengeData.challengeData}
            postDate={challengeData.postDate}
            userName={challengeData.name}
          />
        )}
      </S.AuthWrap>
    </> 
  );
};

export default MypageCheck;