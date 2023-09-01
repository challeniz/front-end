import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { apiInstance } from '../../../utils/api';
import axios from 'axios';

const DetailCheck = () => {

  const [challengeData, setChallengeData] = useState({
    description: '',
  file: '', 
  });

  const { id } = useParams();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const text = queryParams.get('text');


  // AuthPage에서 전달된 이미지 파일 URL을 사용하기 위한 state
  const imageFileUrl = location.state && location.state.imageFileUrl;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get(`/post/challenges/${id}`);
        const data = response.data;

        if (data) {
          setChallengeData({
            description: data.challenge.description.text,
           file: data.challenge.img,
          });
        }
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>

      <h1>인증 설명:</h1>
      <p>{challengeData.description.t}</p>


      {challengeData.file && <img src={challengeData.file} alt="인증 이미지" />}


      {text && (
        <div>
          <h2>AuthPage에서의 텍스트:</h2>
          <p>{text}</p>
        </div>
      )}


      {imageFileUrl && (
        <div>
          <h2>AuthPage에서의 이미지:</h2>
          <img src={imageFileUrl} alt="AuthPage에서의 이미지" />
        </div>
      )}
    </div>
  );
};

export default DetailCheck;
  
  
  
  
  
  