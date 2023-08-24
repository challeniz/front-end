import React, { useState, useEffect } from 'react';
import * as S from './list_content.style';
import { BsCalendarRange } from 'react-icons/bs';
import { apiInstance } from '../../../utils/api';

interface ChallengeData {
  title: string;
  start_date: string;
  end_date: string;
  // 다른 속성들도 추가 가능
}

const ListContent = () => {
  const [like, setLike] = useState(false);
  const [title, setTitle] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');

  const toggleLike = async () => {
    try {
      // 좋아요 관련 처리를 진행
      setLike(!like);
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  useEffect(() => {
    // API를 통해 데이터 가져오기
    apiInstance
      .get('/challenges/') // 실제 API 엔드포인트로 수정하세요
      .then((response) => {
        const challengesData = response.data;

        // 데이터가 존재하는지 체크
        if (challengesData.length > 0) {
          // title, start_date, end_date 속성을 추출하여 새 배열 만들기
          const extractedData = challengesData.map((item: ChallengeData) => ({
            title: item.title,
            start_date: new Date(item.start_date).toLocaleDateString(),
            end_date: new Date(item.end_date).toLocaleDateString(),
          }));

          // 새 배열의 첫 번째 데이터의 속성 가져오기
          const firstChallengeData = extractedData[0];

          setTitle(firstChallengeData.title);
          setStartDate(firstChallengeData.start_date);
          setEndDate(firstChallengeData.end_date);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // 마운트 시에만 호출하도록 빈 배열 전달ㄴ

  return (
    <S.ContentWrap>
      <S.ImgStyled>
        <img src="" alt={`Challenge`} />
        <S.StyledHeartButton like={like} onClick={toggleLike} />
      </S.ImgStyled>
      <S.TabWrap>
        <S.TabStyled>태그</S.TabStyled>
      </S.TabWrap>
      <S.H3Styled>{title}</S.H3Styled>
      <S.H4Styled>
        <BsCalendarRange />
        {start_date} ~ {end_date}
      </S.H4Styled>
    </S.ContentWrap>
  );
};

export default ListContent;
