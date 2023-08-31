import React, { useState, useEffect } from 'react';
import * as S from './auth_page.style';
import { ROUTE } from '../../routes';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import Wrapper from '../../components/common/wrapper/wrapper';
import WhiteBox from '../../components/form/white_box/white_box/white_box';
import WhiteBoxTitle from '../../components/form/white_box/white_box_title/white_box_title';
import WhiteBoxContents from '../../components/form/white_box/white_box_contents/white_box_contents';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { apiInstance } from '../../utils/api';
import useImageUploader from '../../hook/imgfiler';

interface AuthDataType {
  description: string;
  file: string;
}

const AuthPage: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageButtonText, setImageButtonText] = useState('사진 넣기');
  const { id } = useParams();
  const [data, setData] = useState<AuthDataType>({
    description: '',
    file: '',
  });

  // 내용
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 70) {
      setText(inputValue);
    }
  };

  // 날짜
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}.${
    currentDate.getMonth() + 1
  }.${currentDate.getDate()}`;

  const handleCancelClick = () => {
    if (window.confirm('정말 취소하겠습니까?')) {
      // setSelectedImage(null);
      setImageButtonText('사진 넣기'); //사진 삭제
      setText(''); // 텍스트 지우기
    }
  };

  //이미지
  const { imgSrc, fileInput, onChange } = useImageUploader(
    'https://i.ibb.co/NNhgTLL/2.jpg'
  );
  const [isImageSelected, setIsImageSelected] = useState(false);
  const handleIsImageSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setIsImageSelected(true);
      setSelectedImage(selectedFile); // 이미지 선택됨
    } else {
      setIsImageSelected(false);
      setSelectedImage(null); // 이미지 선택되지 않음
      alert('이미지를 선택해주세요.');
    }
    console.log('이미지', selectedFile);
    console.log('이미지', imgSrc);
  };

  const navigate = useNavigate();

  //유효성 및 데이터
  const handleChallengeSubmit = async () => {
    console.log('데이터2', data);

    try {
      const { description } = data;
      if (text.trim() === '' || text == null) {
        alert('내용을 입력하세요.');
      } else if (!isImageSelected) {
        alert('이미지를 선택하세요.');
      }
      console.log('check', isImageSelected);
      const response = await apiInstance.post(`/posts/upload/${id}`, {
        description: text,
        file: isImageSelected,
      });
      console.log('API 응답:', response);
      if (response.status === 201) {
        console.log('response', response);
        // 챌린지 생성 성공 후 추가 로직
        alert('챌린지 개설에 성공했습니다!');
        navigate(`/detail/${response.data.id}`);
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.log('error', error.response);
      } else {
        console.log('error', error);
      }
    }
  };
  return (
    <Wrapper>
      <Header />
      <WhiteBox>
        <WhiteBoxTitle>챌린지 인증</WhiteBoxTitle>
        <WhiteBoxContents>
          <S.H2Styled>{formattedDate}</S.H2Styled>
          <S.AuthWrapper>
            <S.StyledImageContainer>
              <S.StyledImageWrapper
                onClick={() => {
                  if (fileInput.current) {
                    fileInput.current.click();
                  }
                }}
              >
                {/* 선택된 이미지 미리보기 */}
                {selectedImage && (
                  <S.StyledImage src={URL.createObjectURL(selectedImage)} />
                )}
              </S.StyledImageWrapper>

              <input
                type="file"
                ref={fileInput}
                onChange={handleIsImageSelected}
              />
            </S.StyledImageContainer>
            <S.TextInput
              placeholder="70자 이내로 입력해주세요."
              value={text}
              onChange={handleTextChange}
            ></S.TextInput>
          </S.AuthWrapper>
          <S.FormButton>
            <S.FormCancelButton onClick={handleCancelClick}>
              <Link to={ROUTE.DETAILPAGE.link}>취소하기</Link>
            </S.FormCancelButton>
            <S.FormCancelButton onClick={handleChallengeSubmit}>
              <Link to={ROUTE.DETAILPAGE.link}>등록하기</Link>
            </S.FormCancelButton>
            {/* <S.FormCancelButton onClick={joinHandler} ></S.FormCancelButton>  */}
          </S.FormButton>
        </WhiteBoxContents>
      </WhiteBox>
      <Footer />
    </Wrapper>
  );
};

export default AuthPage;
