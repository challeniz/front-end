import React, { useState, useEffect } from 'react';
import * as S from './Countdown.style';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(0); // 초기값을 0으로 설정
  const [countdownText, setCountdownText] = useState(''); // 남은 시간에 대한 텍스트 상태 추가

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance > 0) {
        // 남은 시간이 양수일 때만 업데이트
        setCountDown(distance);

        // 남은 시간을 계산하여 텍스트 설정
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );

        setCountdownText(`마감까지 ${hours}시간 ${minutes}분 ${seconds}초`);
      } else {
        // 남은 시간이 0보다 작으면 카운트다운 종료
        setCountDown(0);
        clearInterval(intervalId);

        // "모집 완료" 텍스트 설정
        setCountdownText('모집 완료');
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countDownDate]);

  return (
    <S.CountWrap>
      <S.Countdown>
        {countdownText} {/* 남은 시간 또는 "모집 완료" 텍스트 표시 */}
      </S.Countdown>
    </S.CountWrap>
  );
};

export default Countdown;
