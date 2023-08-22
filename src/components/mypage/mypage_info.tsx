import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ROUTE } from '../../routes';
import { Link } from 'react-router-dom';
import Wrapper from '../common/wrapper';

const PageBox = styled.div`
  width: 100%;
  height: 299px;
  border-radius: 15px;
  background-color: #ebf2ff;
  display: flex;
  padding: 37px 86px;
  align-items: center;

  a {
    margin-left: auto;
  }
`;

const Avatar = styled.div`
  border-radius: 50%;
  background-color: #c2daff;
  width: 226px;
  height: 226px;
  margin-right: 86px;
`;

const PageTxt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  li:nth-child(1) {
    margin-bottom: 25px;
    font-weight: 400;
    font-size: 33px;
    letter-spacing: 5px;

    span {
      font-size: 36px;
      font-weight: 700;
    }
  }

  li:nth-child(2) {
    font-size: 27px;
    letter-spacing: 1px;
    span {
      font-size: 27px;
      font-weight: 700;
    }
  }
`;

const PageBtn = styled.button`
  border-radius: 15px;
  background-color: #339af0;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin-left: auto;
  padding: 20px 50px;
`;

interface MyInfoProps {}

const MyInfo: React.FC<MyInfoProps> = () => {
  const [Image, setImage] = useState<string>(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  );
  const fileInput = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      // 업로드 취소할 시
      setImage(
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
      );
    }
  };

  return (
    <Wrapper>
      <PageBox>
        <Avatar
          src={Image}
          style={{ margin: '20px' }}
          size={200}
          onClick={() => {
            fileInput.current?.click(); // 옵셔널 체이닝 사용
          }}
        />
        <input
          type="file"
          style={{ display: 'none' }}
          accept="image/jpg,image/png,image/jpeg"
          name="profile_img"
          onChange={onChange}
          ref={fileInput}
        />
        <PageTxt>
          <ul>
            <li>
              <span>김챌린지</span> 님
            </li>
            <li>
              현재등급은 <span>신입챌리니</span>입니다.
            </li>
          </ul>
        </PageTxt>
        <Link to={ROUTE.MYPRIVACY.link}>
          <PageBtn>내 정보 수정하기</PageBtn>
        </Link>
      </PageBox>
    </Wrapper>
  );
};

export default MyInfo;
