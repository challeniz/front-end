import React, { useState, useEffect } from 'react';
import { ROUTE } from '../../routes';
import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../../components/common/wrapper/wrapper';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import MyInfo from '../../components/mypage/mypage_info/mypage_info';
import { apiInstance } from '../../utils/api';
import * as S from './my_privacy.style';
const MyPrivacy = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('token', token);
        const response = await apiInstance.get('/users/mypageInfo');
        const userData = response.data;

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
      const token = localStorage.getItem('token');
      console.log('수정', token);

      const updatedUserData = {
        name: userInfo.name,
        phone: userInfo.phone,
        email: userInfo.email,
      };
      await apiInstance.patch('http://34.64.62.80:3000/users/mypageInfo');

      alert('사용자 정보가 수정되었습니다.');
      navigate('/');
      console.log('사용자 정보가 수정되었습니다.');
    } catch (error) {
      console.error('사용자 정보를 수정하는 동안 오류 발생:', error);
    }
  };

  return (
    <>
      <Header />
      <Wrapper>
        <S.StyleH1>마이 페이지</S.StyleH1>
        <MyInfo />
        <S.PrivacyWrap>
          <S.InfoTitle>
            <h3>내정보 수정</h3>
            <h4>회원탈퇴</h4>
          </S.InfoTitle>
          <S.InfoBox>
            <ul>
              <S.InfoTxt>
                <label htmlFor="labelName">닉네임</label>
                {/* value 값을 어떻게 해야되는지 모르겠습니다; */}
                <input type="text" id="labelName" value={userInfo.name} />
              </S.InfoTxt>
              <br />
              <S.InfoTxt>
                <label htmlFor="labelTel">전화번호</label>
                <input type="text" id="labelTel" value={userInfo.phone} />
              </S.InfoTxt>
              <br />
              <S.InfoTxt>
                <label htmlFor="labeMail">이메일</label>
                <input
                  type="text"
                  id="labelMail"
                  readOnly
                  value={userInfo.email}
                />
              </S.InfoTxt>
              <br />
              <S.InfoTxt>
                <label htmlFor="labelPassword">비밀번호</label>
                <input type="password" id="labelPassword" />
              </S.InfoTxt>
              <br />
              <S.InfoTxt>
                <label htmlFor="labelPasswordConfirm">비밀번호 확인</label>
                <input type="password" id="labelPasswordConfirm" />
              </S.InfoTxt>
              <br />
            </ul>
          </S.InfoBox>
          <S.ButtonWrap>
            <Link to={ROUTE.MYPAGE.link}>
              <S.BackButton>뒤로가기</S.BackButton>
            </Link>
            <S.CorrectionButton onClick={fixHandler}>
              수정하기
            </S.CorrectionButton>
          </S.ButtonWrap>
        </S.PrivacyWrap>
      </Wrapper>
      <Footer />
    </>
  );
};

export default MyPrivacy;
