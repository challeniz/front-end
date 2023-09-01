import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { apiInstance } from '../../../utils/api';
import * as S from './auth_list.style';
import ModalBasic from '../modal/modal';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

interface AuthListProps {}

const AuthList: React.FC<AuthListProps> = () => {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  const [challengeData, setChallengeData] = useState({
    description: '',
    file: '', 
  });

  const { id } = useParams();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const text = queryParams.get('text');



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get(`/challenges/${id}`);
        const data = response.data;

        if (data) {
          setChallengeData({
            description: data.challenge.description,
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
    <>
      <S.AuthWrap>
        {/* 여기에 text를 표시 */}
        <p>{text}</p>
        <S.AuthGrid>
          {/* 여기에 img를 표시 */}
          {challengeData.file && <img src={challengeData.file} alt="인증 이미지" />}
          <S.ImgWrap onClick={showModal}></S.ImgWrap>
          <S.ImgWrap onClick={showModal}></S.ImgWrap>
          {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
        </S.AuthGrid>
      </S.AuthWrap>
    </>
  );
};

export default AuthList;