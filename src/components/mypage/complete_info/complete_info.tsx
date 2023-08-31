import React, { useState, useEffect } from 'react';
import * as S from './complete_info.style';
import { apiInstance } from '../../../utils/api';

const CompleteInfo = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [challengeData, setChallengeData] = useState({
    image: '',
    title: '',
    startDate: '',
    endDate: '',
    id: '',
  });

  useEffect(() => {
    async function fetchChallengeData() {
      try {
        const challengeResponse = await apiInstance.get('/users/mypageChall');

        if (challengeResponse.status === 200) {
          setChallengeData(challengeResponse.data);
        }
      } catch (error) {
        console.error('Error fetching challenge data:', error);
      }
    }

    fetchChallengeData();
  }, []);

  const selectMenuHandler = (index: number) => {
    setCurrentTab(index);
  };
  return (
    <S.InfoWrap>
      <S.StyledImg />
      <S.InfoFlex>
        <div>
          <h3>{challengeData.title}</h3>
          <h4>
            {challengeData.startDate} ~ {challengeData.endDate}
          </h4>
        </div>
        {/* <S.PercentWrap>
          <p>달성률</p>
          <h5>
            100<span>%</span>
          </h5>
        </S.PercentWrap> */}
      </S.InfoFlex>
    </S.InfoWrap>
  );
};

export default CompleteInfo;
