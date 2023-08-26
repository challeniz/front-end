import React, { useEffect, useState } from 'react';
import Footer from '../../components/common/footer/footer';
import Header from '../../components/common/header/header';
import Wrapper from '../../components/common/wrapper/wrapper';
import FormAgreeBox from '../../components/form/form_agree/form_agree';
import {
  FormButton,
  FormCancelButton,
  FormSubmitButton,
} from '../../components/form/form_button/form_button';
import FormInfo from '../../components/form/form_info/form_info';
import NoticeForm from '../../components/form/form_notice/from_notice';
import * as S from './new_page.style';

const NewPage = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [topic, setTopic] = useState<string>('');
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // 주제미입력
  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  };


// 이미지 선택
  // const handleIsImageSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files && e.target.files[0]; // 수정: 선택된 파일 가져오기
  //   setSelectedFile(file); // 수정: 선택된 파일 상태 업데이트
  //   console.log('뉴이미지', file); // 수정: selectedFile 대신 file 사용
  //   if (file) {
  //     setIsImageSelected(true); // 이미지 선택됨
  //   } else {
  //     setIsImageSelected(false); // 이미지 선택되지 않음
  //   }
  // };
  
  const handleChallengeSubmit = () => {
    if (topic.trim() === '') {
      alert('주제를 입력하세요.');
    } else if (!isImageSelected) {
      alert('이미지를 선택해주세요.');
    } else if (isAgreed) {
      alert('챌린지가 성공적으로 개설되었습니다!');
    } else {
      alert('챌린지를 개설하려면 약관에 동의해야 합니다.');
    }
  };
  return (
    <>
      <Header />
      <S.PageBack>
        <Wrapper>
          <NoticeForm />
          <FormInfo
            onInputChange={handleTopicChange}
            setTopic={setTopic}
            topic={topic}
            isImageSelected={isImageSelected}
            handleIsImageSelected={handleIsImageSelected}
          />

          <FormAgreeBox onAgreeChange={setIsAgreed} />
          <FormButton>
            <FormCancelButton>취소하기</FormCancelButton>
            <FormSubmitButton onClick={handleChallengeSubmit}>
              챌린지 개설하기
            </FormSubmitButton>
          </FormButton>
        </Wrapper>
      </S.PageBack>
      <Footer />
    </>
  );
};

export default NewPage;
