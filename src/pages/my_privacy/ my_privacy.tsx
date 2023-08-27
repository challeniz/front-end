import React, { useState, useEffect }from 'react';
import { ROUTE } from '../../routes';
import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../../components/common/wrapper/wrapper';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import MyInfo from '../../components/mypage/mypage_info/mypage_info';
import { apiInstance } from '../../utils/api';
import * as S from './my_privacy.style';
const MyPrivacy = () => {

  // 유저정보 받아온 후 값을 수정할 수 있게 구현해야 하는데 잘안됩니다....ㅠㅠㅠㅠㅠㅠㅠㅠㅠ
  //useState 사용하는건 알겠는데 초기값을 어떻게 하고 value에는 무엇을 적용해야할 지 모르겠습니다.

  const navigate = useNavigate();
  
  const [userInfo, setUserInfo] = useState({
    name: '', // 빈값이 초기값이 아니라 회원가입할때 사용되었던 정보가 초기값으로 되어있어야 출력이된다?
    phone: '',
    email: '',
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token'); // 로컬 스토리지에서 토큰 가져오기 (실제 토큰 키로 대체)
        console.log('token', token)
        const response = await apiInstance.get('/users/mypageInfo');
        const userData = response.data; // 서버 응답에서 사용자 데이터 추출

        setUserInfo({
          name: userData.name,
          phone: userData.phone,
          email: userData.email,
        });
      } catch (error) {
        console.error('사용자 정보를 불러오는 동안 오류 발생:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const fixHandler = async () => {
    try {
      const token = localStorage.getItem('token'); // 로컬 스토리지에서 토큰 가져오기 (실제 토큰 키로 대체)
  
      const updatedUserData = {
        name: userInfo.name, // 수정된 이름 정보
        phone: userInfo.phone, // 수정된 전화번호 정보
        email: userInfo.email, // 수정된 이메일
      };
      // 수정할 데이터를 담은 객체를 서버로 전송합니다.
      await apiInstance.patch('http://34.64.62.80:3000/users/mypageInfo');
  
      // 수정 완료 후 필요한 처리를 해주세요.
      alert('사용자 정보가 수정되었습니다.')
      navigate('/'); // 개인정보 수정 성공 시 홈 메인페이지로 이동
      console.log('사용자 정보가 수정되었습니다.');
    } catch (error) {
      console.error('사용자 정보를 수정하는 동안 오류 발생:', error);
      // 오류 처리를 여기에 추가해주세요.
    }
  };

  return (
    <>
      <Header />
      <Wrapper>
        <S.StyleH1>마이 페이지</S.StyleH1>
        <MyInfo />
        <div>
          <S.InfoTitle>
            <h3>내정보 수정</h3>
            <h4>회원탈퇴</h4>
          </S.InfoTitle>
          <S.InfoBox>
            <ul>
              <S.InfoTxt>
                <label htmlFor="labelName">닉네임</label>
                {/* value 값을 어떻게 해야되는지 모르겠습니다; */}
                <input type="text" id="labelName" value={userInfo.name}/>
              </S.InfoTxt>
              <br />
              <S.InfoTxt>
                <label htmlFor="labelTel">전화번호</label>
                <input type="text" id="labelTel" value={userInfo.phone}/>
              </S.InfoTxt>
              <br />
              <S.InfoTxt>
                <label htmlFor="labeMail">이메일</label>
                <input type="text" id="labelMail" readOnly value={userInfo.email}/>
              </S.InfoTxt>
              <br />
              <S.InfoTxt>
                <label htmlFor="labelPassword">비밀번호</label>
                <input type="password" id="labelPassword" />
              </S.InfoTxt>
              <br />
              <S.InfoTxt>
                <label htmlFor="labelPasswordConfirm">비밀번호 확인</label>
                <input type="password" id="labelPasswordConfirm"  />
              </S.InfoTxt>
              <br />
            </ul>
          </S.InfoBox>
          <S.ButtonWrap>
            <Link to={ROUTE.MYPAGE.link}>
              <S.BackButton>뒤로가기</S.BackButton>
            </Link>
            <S.CorrectionButton onClick={fixHandler}>수정하기</S.CorrectionButton>
          </S.ButtonWrap>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};



export default MyPrivacy;
