import React, { useEffect, useState } from 'react';
import * as S from './badge.style';
import { apiInstance } from '../../../utils/api';

interface Badge {
  name: string;
  count: string;
  obtain: boolean;
  img: string;
}

const Badge = () => {
  const [badges, setBadges] = useState<Badge[]>([]);
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
            const badgeList = response.data.list;
            const badgeArray: Badge[] = badgeList.map((badge: any) => ({
              obtain: badge.obtain,
              name: badge.name,
              count: badge.count,
              img: badge.img,
            }));
            setBadges(badgeArray);
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
          {badges.slice(0, 4).map((badge, index) => (
            <div key={index}>
              <S.Img
                src={badge.img}
                alt={badge.name}
                className={`badge-image ${badge.obtain ? 'on' : ''}`}
              />
              <p>{badge.name}</p>
              {index >= 2 && <h5>{badge.count}회</h5>}
            </div>
          ))}
        </S.BadgeWrap>
      </S.BadgeTitle>

      <S.BadgeTitle>
        <h3>목표 배지</h3>
        <S.BadgeWrap>
          {badges.slice(5, 10).map((badge, index) => (
            <div key={index}>
              <S.Img
                src={badge.img}
                alt={badge.name}
                className={`badge-image ${badge.obtain ? 'on' : ''}`}
              />
              <p>{badge.name}</p>
              <h5>{badge.count}회</h5>
            </div>
          ))}
        </S.BadgeWrap>
      </S.BadgeTitle>
    </div>
  );
};

export default Badge;
