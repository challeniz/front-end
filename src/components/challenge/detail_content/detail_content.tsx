import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './detail_content.style';
import { Tab } from '../detail_tab/detail_tab';
import { apiInstance } from '../../../utils/api';

const DetailContent = () => {
  const [image, setImage] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function fetchChallengeData() {
      try {
        const challengeResponse = await apiInstance.get(`/challenges/${id}`);
        // 수정한곳
        const data = challengeResponse.data.challenge.mainImg;

        setImage(data);
      } catch (error) {
        console.error('Error fetching challenge data:', error);
      }
    }

    fetchChallengeData();
  }, []);

  return (
    <S.DetailContents>
      <S.ImgStyledWrapper>
        <img src={image} alt="Challenge" />
      </S.ImgStyledWrapper>
      <Tab />
    </S.DetailContents>
  );
};

export default DetailContent;
