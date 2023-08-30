import React, { useRef, useState, useEffect } from 'react';
import * as S from './mypage_info.style';
import { ROUTE } from '../../../routes';
import { Link } from 'react-router-dom';
import Wrapper from '../../common/wrapper/wrapper';
import useImageUploader from '../../../hook/imgfiler';
import { apiInstance } from '../../../utils/api';

interface MyInfoProps {}

const MyInfo: React.FC<MyInfoProps> = () => {
  const { imgSrc, fileInput, onChange } = useImageUploader(
    'https://i.ibb.co/rbPbb9z/3.png'
  );

  const [mypageInfo, setMypageInfo] = useState({
    name: '',
    grade: '',
  });

  useEffect(() => {
    // API를 통해 유저 정보 가져오기
    apiInstance
      .get('/users/mypageInfo')
      .then((response) => {
        const userData = response.data;
        setMypageInfo({
          name: userData.name,
          grade: userData.grade,
        });
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <Wrapper>
      <S.PageBox>
        <S.AvatarWrapper
          onClick={() => {
            if (fileInput.current) {
              fileInput.current.click();
            }
          }}
        >
          <S.AvatarImage src={imgSrc} />
        </S.AvatarWrapper>
        <S.InputStyled type="file" ref={fileInput} onChange={onChange} />
        <S.PageTxt>
          <ul>
            <li>
              <span>{mypageInfo.name}</span> 님
            </li>
            <li>
              현재등급은 <span>{mypageInfo.grade}</span>입니다.
            </li>
          </ul>
        </S.PageTxt>
        <Link to={ROUTE.MYPRIVACY.link}>
          <S.PageBtn>내 정보 수정하기</S.PageBtn>
        </Link>
      </S.PageBox>
    </Wrapper>
  );
};

export default MyInfo;
