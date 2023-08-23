import React,{useState} from 'react';
import styled from 'styled-components';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import Wrapper from '../components/common/wrapper';
import WhiteBox from '../components/form/white_box';
import WhiteBoxTitle from '../components/form/white_box_title';
import WhiteBoxContents from '../components/form/white_box_contents';
import {ROUTE} from "../routes"

import { useNavigate,Link } from 'react-router-dom';

const PageBack = styled.div`
  background-color: #f4f4f4;
`;

const StyledImageContainer = styled.div`
  position: relative;
  width: 620px;
  height: 377px;
  background-color: #d9d9d9;
`;

const StyledImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledLabel = styled.label`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const TextInput = styled.textarea`
  width: 620px;
  height: 377px;
  background-color: #f1f1f1;
  border: 1px solid #339af0;
  border-radius: 10px;
  padding: 20px;
  font-size: 18px;
`;

const AuthWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 620px;
    height: 377px;
    background-color: #d9d9d9;
    border: none;
  }
`;

const H2Styled = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 0 0 38px;
`;

const FormCancelButton = styled.button`
  cursor: pointer;
  width: 620px;
  padding: 30px 0;
  text-align: center;
  border: 1px solid #a9a9a9;
  border-radius: 10px;
  background-color: #fff;
  font-size: 20px;
  font-weight: 500;
`;

const FormSubmitButton = styled.button`
  cursor: pointer;
  width: 620px;
  padding: 30px 0;
  text-align: center;
  border: 1px solid #339af0;
  border-radius: 10px;
  background-color: #339af0;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;

const FormButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 38px;
`;

const AuthPage: React.FC = () => {


  const [text, setText] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageButtonText, setImageButtonText] = useState("사진 넣기");


  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    
    if (inputValue.length <= 70) {
      setText(inputValue);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      setSelectedImage(file);
      setImageButtonText(""); // 이미지 업로드 후 버튼 내용 변경
    }
  };

  const handleLabelClick = () => {
    // 이미지가 삽입된 이후 다시 이미지 삽입될수 있게 클릭
    document.getElementById("imageUpload")?.click();
    setSelectedImage(null);
    setImageButtonText("사진 넣기");
  };

  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}.${currentDate.getMonth() + 1}.${currentDate.getDate()}`;


  const handleCancelClick = () => {
    if (window.confirm("정말 취소하겠습니까?")) {
      setSelectedImage(null);
      setImageButtonText("사진 넣기"); //사진 삭제
      setText(""); // 텍스트 지우기
    }
  };

  return (
    <Wrapper>
      <WhiteBox>
        <WhiteBoxTitle>챌린지 인증</WhiteBoxTitle>
        <WhiteBoxContents>
          <H2Styled>{formattedDate}</H2Styled>
          <AuthWrapper>
          <StyledImageContainer>
              {selectedImage && (
                <StyledImageWrapper>
                  <StyledImage src={URL.createObjectURL(selectedImage)} alt="Selected" />
                </StyledImageWrapper>
              )}
              <StyledLabel htmlFor="imageUpload" onClick={handleLabelClick}>
                {imageButtonText}
              </StyledLabel>
              <input
                type="file"
                accept="image/*"
                id="imageUpload"
                onChange={handleImageChange}
                style={{ width: '100%', height: '100%', opacity: 0, position: 'absolute', zIndex: -1 }}
              />
            </StyledImageContainer>
            <TextInput
            placeholder="70자 이내로 입력해주세요."
            value={text}
            onChange={handleTextChange}
            ></TextInput>
          </AuthWrapper>
          <FormButton>
            <FormCancelButton onClick={handleCancelClick}><Link to={ROUTE.DETAILPAGE.link}>취소하기</Link></FormCancelButton>
            <FormCancelButton><Link to={ROUTE.DETAILPAGE.link}>등록하기</Link></FormCancelButton>
          </FormButton>
        </WhiteBoxContents>
      </WhiteBox>
    </Wrapper>
  )


};

export default AuthPage;
