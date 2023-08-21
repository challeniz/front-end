import React , {useState}from 'react';
import styled from 'styled-components';
import Wrapper from '../components/common/wrapper';
import { MyPageTab } from '../components/common/mypage_tab';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css';


const MyPage = () => {

    const [value, onChange] = useState(new Date());
    const dateArr = ["2023. 08. 17."];
  return (
    <Wrapper>
      <h1>마이 페이지</h1>
      <MyPageTab></MyPageTab>
      <div className="line"></div>
      <div className="MyChall">
        <h2>참가중인 챌린지</h2>
        <div className="Chall">
          <div className="ChallContents">
            <div className="ContentsInner1">
              <div className="ChallImg"></div>
              <div className="ChallTxt">
                <a href="#">수정</a>
                <a href="#">삭제</a>
              </div>
              <h3>하루 만보 걷기 챌린지</h3>
              <h4>2023.08.01 ~ 2023.08.31</h4>
              <p>
                달성률 <span>70%</span>
              </p>

              <div className="ChallBox">챌린지 인증하기</div>
            </div>

            <div className="ContentsInner2">
              <div className="ChallImg"></div>
              <div className="ChallTxt">
                <a href="#">#운동</a>
                <a href="#">#걷기</a>
              </div>
              <h3>하루 만보 걷기 챌린지</h3>
              <h4>2023.08.01 ~ 2023.08.31</h4>
              <p>
                달성률 <span>90%</span>
              </p>

              <div className="ChallBox2">챌린지 인증완료</div>
            </div>
          </div>
        </div>

        <h2 className="StyledH2">완료한 챌린지</h2>
        <h2 className="StyledH2">+ 찜 한 챌린지</h2>
      </div>

        

      <div className="Chall">
        <div></div>
      </div>
    </Wrapper>
  );
};

export default MyPage;
