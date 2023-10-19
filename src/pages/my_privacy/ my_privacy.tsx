import React, { useState, useEffect } from 'react';
import * as S from './my_privacy.style';
import { ROUTE } from '../../routes';
import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../../components/common/wrapper/wrapper';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import MyInfo from '../../components/mypage/mypage_info/mypage_info';
import { apiInstance } from '../../utils/api';
import {
  emailRegex,
  passwordRegex,
  nickNameRegex,
  numberRegex,
} from '../../components/common/validation/validation';

const MyPrivacy = () => {
  const navigate = useNavigate();

  const [Valid, setValid] = useState({
    name: true,
    phone: true,
    email: true,
    password: true,
    confirmPassword: true,
  });

  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
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
          password: userInfo.password,
          confirmPassword: userInfo.confirmPassword,
        });
      } catch (error) {
        console.error('사용자 정보를 불러오는 동안 오류 발생:', error);
      }
    };

    fetchUserInfo();
  });

  const fixNameHandler = (event: any) => {
    const updatedUserInfo = { ...userInfo, name: event.target.value };
    setUserInfo(updatedUserInfo);

    if (nickNameRegex.test(userInfo.name)) {
      setValid((prevValid) => ({
        ...prevValid,
        name: true,
      }));
    } else {
      setValid((prevValid) => ({
        ...prevValid,
        name: false,
      }));
    }
  };

  const deleteBtnHandler = async () => {
    try {
      const token = localStorage.getItem('token');

      await apiInstance.delete('/users/withdrawal', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert('회원 탈퇴가 완료되었습니다.');
      localStorage.removeItem('token');
      navigate('/');
      console.log('회원 탈퇴가 완료되었습니다.');
    } catch (error) {
      console.error('회원 탈퇴 도중 오류 발생:', error);
    }
  };

  const fixPhoneHandler = (event: any) => {
    const updatedUserInfo = { ...userInfo, phone: event.target.value };
    setUserInfo(updatedUserInfo);

    if (numberRegex.test(event.target.value)) {
      setValid((prevValid) => ({
        ...prevValid,
        phone: true,
      }));
    } else {
      setValid((prevValid) => ({
        ...prevValid,
        phone: false,
      }));
    }
  };

  const fixEmailHandler = (event: any) => {
    const updatedUserInfo = { ...userInfo, email: event.target.value };
    setUserInfo(updatedUserInfo);

    if (emailRegex.test(userInfo.email)) {
      setValid((prevValid) => ({
        ...prevValid,
        email: true,
      }));
    } else {
      setValid((prevValid) => ({
        ...prevValid,
        email: false,
      }));
    }
  };

  //패스워드
  const fixPasswordHandler = (event: any) => {
    const updatedUserInfo = { ...userInfo, password: event.target.value };
    setUserInfo(updatedUserInfo);

    if (passwordRegex.test(userInfo.password)) {
      setValid((prevValid) => ({
        ...prevValid,
        password: true,
      }));
    } else {
      setValid((prevValid) => ({
        ...prevValid,
        password: false,
      }));
    }
  };

  //비밀번호 재입력
  const fixConfirmPasswordHandler = (event: any) => {
    const updatedUserInfo = {
      ...userInfo,
      confirmPassword: event.target.value,
    };
    setUserInfo(updatedUserInfo);

    if (userInfo.password === event.target.value) {
      setValid((prevValid) => ({
        ...prevValid,
        confirmPassword: true,
      }));
    } else {
      setValid((prevValid) => ({
        ...prevValid,
        confirmPassword: false,
      }));
    }
  };

  const handleEditDisable = () => {
    if (
      userInfo.email &&
      userInfo.name &&
      userInfo.phone &&
      userInfo.password &&
      userInfo.confirmPassword &&
      Valid.email &&
      Valid.name &&
      Valid.phone &&
      Valid.password &&
      Valid.confirmPassword
    )
      return false;
    return true;
  };

  const fixBtnHandler = async () => {
    try {
      const updatedUserData = {
        name: userInfo.name,
        phone: userInfo.phone,
        email: userInfo.email,
        password: userInfo.password,
      };
      // 수정할 데이터를 담은 객체를 서버로 전송합니다.
      await apiInstance.patch('/users/mypageInfo', updatedUserData);

      // 수정 완료 후 필요한 처리를 해주세요.
      alert('사용자 정보가 수정되었습니다.');
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
        <S.MyWrap>
          <S.InfoTitle>
            <h3>내정보 수정</h3>
            <h4 onClick={deleteBtnHandler}>회원탈퇴</h4>
          </S.InfoTitle>
          <S.InfoBox>
            <ul>
              <S.InfoTxt>
                <label htmlFor="labelName">닉네임</label>
                {/* value 값을 어떻게 해야되는지 모르겠습니다; */}
                <input
                  type="text"
                  id="labelName"
                  value={userInfo.name}
                  onChange={fixNameHandler}
                  placeholder="닉네임을 입력해주세요."
                />
              </S.InfoTxt>
              {/* 닉네임 에러메세지 입력칸 */}
              <S.ErrorMessageWrap>
                {!Valid.name && (
                  <div>
                    2자 이상 8자 이하, 영어 or 숫자 or 한글로 입력해주세요.
                  </div>
                )}
              </S.ErrorMessageWrap>
              <br />
              <S.InfoTxt>
                <label htmlFor="labelTel">전화번호</label>
                <input
                  type="text"
                  id="labelTel"
                  value={userInfo.phone}
                  onChange={fixPhoneHandler}
                  placeholder="전화번호를 입력해주세요."
                />
              </S.InfoTxt>
              <S.ErrorMessageWrap>
                {!Valid.phone && <div>전화번호가 올바르지 않습니다.</div>}
              </S.ErrorMessageWrap>
              <br />
              <S.InfoTxt>
                <label htmlFor="labeMail">이메일</label>
                <input
                  type="text"
                  id="labelMail"
                  value={userInfo.email}
                  onChange={fixEmailHandler}
                  placeholder="test@gmail.com."
                />
              </S.InfoTxt>
              {/* 이메일 에러메세지 입력칸 */}
              <S.ErrorMessageWrap>
                {!Valid.email && <div>올바른 이메일을 입력해주세요.</div>}
              </S.ErrorMessageWrap>
              <br />
              <S.InfoTxt>
                <label htmlFor="labelPassword">비밀번호</label>
                <input
                  type="password"
                  id="labelPassword"
                  placeholder="영문, 숫자, 특수문자 포함 10자 이상"
                  onChange={fixPasswordHandler}
                />
              </S.InfoTxt>
              {/* 비밀번호 에러메세지 입력칸 */}
              <S.ErrorMessageWrap>
                {!Valid.password && (
                  <div>영문, 숫자, 특수문자 포함 10자 이상 입력해주세요.</div>
                )}
              </S.ErrorMessageWrap>
              <br />
              <S.InfoTxt>
                <label htmlFor="labelPasswordConfirm">비밀번호 확인</label>
                <input
                  type="password"
                  id="labelPasswordConfirm"
                  placeholder="영문, 숫자, 특수문자 포함 10자 이상"
                  onChange={fixConfirmPasswordHandler}
                />
              </S.InfoTxt>
              {/* 비밀번호 에러메세지 입력칸 */}
              <S.ErrorMessageWrap>
                {!Valid.confirmPassword && (
                  <div>비밀번호가 일치하지 않습니다.</div>
                )}
              </S.ErrorMessageWrap>
              <br />
            </ul>
          </S.InfoBox>
          <S.ButtonWrap>
            <Link to={ROUTE.MYPAGE.link}>
              <S.BackButton>뒤로가기</S.BackButton>
            </Link>
            <S.CorrectionButton
              onClick={fixBtnHandler}
              disabled={handleEditDisable()}
            >
              수정하기
            </S.CorrectionButton>
          </S.ButtonWrap>
        </S.MyWrap>
      </Wrapper>
      <Footer />
    </>
  );
};

export default MyPrivacy;
