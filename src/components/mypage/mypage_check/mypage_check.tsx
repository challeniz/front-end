import React, { useState, useEffect } from 'react';
import { apiInstance } from '../../../utils/api';
import ModalBasic from '../../common/modal/modal';
import * as S from './mypage_check.style';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import moment from 'moment';
import img from '../../../assets/image/heart.png';
interface MypageCheckProps {}

interface Challenge {
  recru_open_date: string;
  recru_end_date: string;
  start_date: string;
  end_date: string;
  title: string;
  posts: [];
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
  recru_open_date: string;
  recru_end_date: string;
  start_date: string;
  end_date: string;
  title: string;
}
const MypageCheck: React.FC<MypageCheckProps> = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);
  const [challengeData, setChallengeData] = useState<updatedChallenge>();
  const [challengeInfo, setChallengeInfo] = useState<dateInfo[]>([]);

  const [isParticipated, setIsParticipated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('token', token);
        const response = await apiInstance.get('/posts/my');
        const data = response.data;
        console.log('Received data:', data);
        if (data.length > 0) {
          const challenges = data.map((challenge: any) => ({
            title: challenge.title,
            recru_open_date: challenge.recru_open_date,
            recru_end_date: challenge.recru_end_date,
            start_date: challenge.start_date,
            end_date: challenge.end_date,
            posts: challenge.posts.length > 0 ? challenge.posts : [],
          }));
          console.log(data);
          const date = data.map((challenge: any) => ({
            recru_open_date: challenge.recru_open_date,
            recru_end_date: challenge.recru_end_date,
            start_date: challenge.start_date,
            end_date: challenge.end_date,
            title: challenge.title,
          }));

          setChallengeList(challenges);
          setChallengeInfo(date);
          console.log('날짜', date);
        }
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    };
    console.log(challengeData);
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

  const getEventsForChallenge = (challenge: dateInfo) => {
    const recruOpenDate = moment(challenge.recru_open_date).format();
    const recruEndDate = moment(challenge.recru_end_date).format();
    const startDate = moment(challenge.start_date).format();
    const endDate = moment(challenge.end_date).format();

    return [
      {
        title: '모집기간',
        start: recruOpenDate,
        end: recruEndDate,
        classNames: 'event1-class',
      },
      {
        title: '진행기간',
        start: startDate,
        end: endDate,
        classNames: 'event2-class',
      },
    ];
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
