import React, { useState } from 'react';
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
  file: File | null;
}

const AuthPage: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageButtonText, setImageButtonText] = useState('사진 넣기');
  const { id } = useParams();
  const [data, setData] = useState<AuthDataType>({
    description: '',
    file: null,
  });

  // 내용
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 70) {
      setText(inputValue);

      setData((prevData) => ({ ...prevData, description: inputValue }));
    }
  };

  // 날짜
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}.${
    currentDate.getMonth() + 1
  }.${currentDate.getDate()}`;

  const handleCancelClick = () => {
    if (window.confirm('정말 취소하겠습니까?')) {
      setImageButtonText('사진 넣기');
      setText('');
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
      setSelectedImage(selectedFile);

      setData((prevData) => ({ ...prevData, file: selectedFile }));
    } else {
      setIsImageSelected(false);
      setSelectedImage(null);
      alert('이미지를 선택해주세요.');
    }
  };

  const navigate = useNavigate();

  const handleChallengeSubmit = async () => {
    try {
      if (text.trim() === '' || text == null) {
        alert('내용을 입력하세요.');
      } else if (!isImageSelected) {
        alert('이미지를 선택하세요.');
      }

      const formData = new FormData();
      formData.append('description', text);

      if (fileInput.current) {
        const selectedFile =
          fileInput.current.files && fileInput.current.files[0];
        if (selectedFile) {
          formData.append('file', selectedFile);
        } else {
          alert('이미지를 선택해주세요.');
          return;
        }
      } else {
        alert('이미지 파일이 존재하지 않습니다.');
        return;
      }
      const response = await apiInstance.post(`/posts/upload/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 201) {
        console.log('response', response);
        // 챌린지 생성 성공 후 추가 로직
        alert('인증이 완료 되었습니다.');
        navigate(`/detail/${id}`);
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
    <>
      <Header />
      <S.PageBack>
        <Wrapper>
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
                <S.FormSubmitButton onClick={handleChallengeSubmit}>
                  <Link to={ROUTE.DETAILPAGE.link}>등록하기</Link>
                </S.FormSubmitButton>
              </S.FormButton>
            </WhiteBoxContents>
          </WhiteBox>
        </Wrapper>
      </S.PageBack>

      <Footer />
    </>
  );
};

export default AuthPage;
