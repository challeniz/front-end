import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './detail_content.style';
import { Tab } from '../detail_tab/detail_tab';
import { apiInstance } from '../../../utils/api';

const DetailContent = () => {
  const [imageName, setImageName] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function fetchChallengeData() {
      try {
        const challengeResponse = await apiInstance.get(
          'challenges/64ee2a9cd50c2ff6c51f6689'
        );
        const data = challengeResponse.data;
        const exten = data.challenge.mainImg.contentType;
        const bin = data.img;
        const imageName = 'data:' + exten + ';base64,' + bin;

        setImageName(imageName);
      } catch (error) {
        console.error('Error fetching challenge data:', error);
      }
    }

    fetchChallengeData();
  }, []);

  return (
    <S.DetailContents>
      <S.ImgStyledWrapper>
        <img src={imageName} alt="Challenge" />
      </S.ImgStyledWrapper>
      <Tab />
    </S.DetailContents>
  );
};

export default DetailContent;
