import React, { useEffect, useState } from 'react';
import * as S from './badge.style';
import { apiInstance } from '../../../utils/api';

interface badge {
  obtain: Boolean;
}

const Badge = () => {
  const [badges, setBadges] = useState([]);
  const [userInfo, setUserInfo] = useState({
    id: '',
  });

  useEffect(() => {
    async function fetchBadges() {
      try {
        const token = localStorage.getItem('token');
        const response = await apiInstance.get('/badges');
        if (token) {
          if (response.status === 200) {
            setBadges(response.data);
            console.log(response.data);
          }
        }
      } catch (error) {
        console.error('배지 정보 가져오기 오류', error);
      }
    }

    fetchBadges();
  }, []);

  return (
    <div>
      <S.BadgeTitle>
        <h3>활동 배지</h3>
        <S.BadgeWrap>
          <div>
            <S.Img src="https://i.ibb.co/2d3YCQk/join.png" alt="join" />
            <p>가입 완료</p>
          </div>
          <div>
            <S.Img src="https://i.ibb.co/rtLSrH1/all.png" alt="all" />
            <p>모든 분야 참여</p>
          </div>
          <div>
            <S.Img src="https://i.ibb.co/1Gtgdfz/complete.png" alt="complete" />
            <p>챌린지 참가</p>
          </div>
          <div>
            <S.Img src="https://i.ibb.co/q75V85M/target.png" alt="target" />
            <p>챌린지 100% 달성</p>
          </div>
          <div>
            <S.Img src="https://i.ibb.co/MRLDLMN/comment.png" alt="comment" />
            <p>받은 후기</p>
          </div>
        </S.BadgeWrap>
      </S.BadgeTitle>

      <S.BadgeTitle>
        <h3>목표 배지</h3>
        <S.BadgeWrap>
          <div>
            <S.Img src="https://i.ibb.co/7VtqTRY/food.png" alt="food" />
            <p>식습관 마스터</p>
          </div>
          <div>
            <S.Img src="https://i.ibb.co/wMgdVNt/eco.png" alt="eco" />
            <p>환경 마스터</p>
          </div>
          <div>
            <S.Img src="https://i.ibb.co/j5BBDCm/study.png" alt="study" />
            <p>공부 마스터</p>
          </div>
          <div>
            <S.Img src="https://i.ibb.co/2dmmDMz/artist.png" alt="artist" />
            <p>취미 마스터</p>
          </div>
          <div>
            <S.Img src="https://i.ibb.co/4K4ZFg7/muscle.png" alt="muscle" />
            <p>건강 마스터</p>
          </div>
        </S.BadgeWrap>
      </S.BadgeTitle>
    </div>
  );
};

export default Badge;
