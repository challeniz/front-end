import React, { useState } from 'react';
import * as S from './auth_page.style';
import { ROUTE } from '../../routes';
import Footer from '../../components/common/footer/footer';
import Wrapper from '../../components/common/wrapper/wrapper';
import WhiteBox from '../../components/form/white_box/white_box/white_box';
import WhiteBoxTitle from '../../components/form/white_box/white_box_title/white_box_title';
import WhiteBoxContents from '../../components/form/white_box/white_box_contents/white_box_contents';

import {  Link } from 'react-router-dom';

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
    console.log(selectedImage)
  };

// api 나오면 연결하기!!!
//   const joinHandler = async () => {
//     try {
//       const response = await axios.post('URL', {
//         id,
//         image,
//         text,
//       });
//       if(response.status.201) {
//         실행코드 alert('등록에 성공했스비다.')
//       실행과 동시에 내인증현황 html 뿌려주는 기능도 코드 적어야함
//            navigator('/detailpage')
//       } 
//     } catch (error) {
//       console.error('로그인 에러:', error);
//       alert('로그인에 실패하였습니다.');
//     }
//   }


  // const handleLabelClick = () => {
  //   // 이미지가 삽입된 이후 다시 이미지 삽입될수 있게 클릭
  //   document.getElementById("imageUpload")?.click();
  //   setSelectedImage(null);
  //   setImageButtonText("사진 넣기");
  // };

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
      <Header />
      <WhiteBox>
        <WhiteBoxTitle>챌린지 인증</WhiteBoxTitle>
        <WhiteBoxContents>
          <S.H2Styled>{formattedDate}</S.H2Styled>
          <S.AuthWrapper>
          <S.StyledImageContainer>
  {selectedImage && (
    <S.StyledImageWrapper>
      <S.StyledImage src={URL.createObjectURL(selectedImage)} alt="Selected" />
    </S.StyledImageWrapper>
  )}
  <S.StyledLabel htmlFor="imageUpload">{imageButtonText}</S.StyledLabel>
  <input
    type="file"
    accept="image/*"
    id="imageUpload"
    onChange={handleImageChange}
    style={{
      width: '100%',
      height: '100%',
      opacity: 0,
      position: 'absolute',
      zIndex: -1,
      cursor: 'pointer', // add this to make the cursor indicate the input can be clicked
    }}
  />
</S.StyledImageContainer>
            <S.TextInput
            placeholder="70자 이내로 입력해주세요."
            value={text}
            onChange={handleTextChange}
            ></S.TextInput>
          </S.AuthWrapper>
          <S.FormButton>
            <S.FormCancelButton onClick={handleCancelClick}><Link to={ROUTE.DETAILPAGE.link}>취소하기</Link></S.FormCancelButton>
            <S.FormCancelButton ><Link to={ROUTE.DETAILPAGE.link}>등록하기</Link></S.FormCancelButton>
            {/* <S.FormCancelButton onClick={joinHandler} ></S.FormCancelButton>  */}
          </S.FormButton>
        </WhiteBoxContents>
      </WhiteBox>
      <Footer />
    </Wrapper>
  )


};

export default AuthPage;

//첼린지 수정 삭제 기능 있는지 물어보기 /날짜는 그대로되 사진이나 텍스트 같은거. / 
//달성률- 정주님께 백앤드에서 연동이 될지 아니면 내가 직접 프론트엔드에서 연동이 되게 해야 될지