import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './detail_content.style';
import { Tab } from '../detail_tab/detail_tab';
import { apiInstance } from '../../../utils/api';

const DetailContent = () => {
  const [image, setImage] = useState('');
  const { id } = useParams();
  const [challengeInfo, setChallengeInfo] = useState({
    like: false,
    title: '',
    user: '',
    tag: [],
    count: '',
    id: '',
    recru_open_date: '',
    recru_end_date: '',
  });
  const [userInfo, setUserInfo] = useState({
    id: '',
  });
  const [isParticipated, setIsParticipated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get(`/challenges/${id}`);
        const data = response.data;
        console.log('Fetched data:', data);

        if (data) {
          setChallengeInfo((prevChallengeInfo) => ({
            ...prevChallengeInfo,
            like: false,
            title: data.challenge.title,
            user: data.name,
            tag: data.challenge.tag,
            count: data.count,
            id: data.challenge._id,
            recru_open_date: data.challenge.recru_open_date,
            recru_end_date: data.challenge.recru_end_date,
          }));

          const response = await apiInstance.get('/users/mypageInfo');
          const currentUserID = response.data._id;

          setUserInfo({
            id: currentUserID.id,
          });
          console.log('유저아이디', currentUserID);

          const hasParticipated = data.challenge.users.includes(currentUserID);
          setIsParticipated(hasParticipated);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <S.DetailContents>
      <S.ImgStyledWrapper>
        <img src={image} alt="Challenge" />
      </S.ImgStyledWrapper>
      <S.MobileInfo>
        <h4>
          모집기간 : {challengeInfo.recru_open_date} ~{' '}
          {challengeInfo.recru_end_date}
        </h4>
        <h3>{challengeInfo.title}</h3>
      </S.MobileInfo>
      <Tab />
    </S.DetailContents>
  );
};

export default DetailContent;
