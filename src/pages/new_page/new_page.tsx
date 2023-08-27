import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  const [data, setData] = useState({
    title: '', // 주제의 초기값
    cate: '',
    start_date: '',
    end_date: '',
    recru_open_date: '',
    recru_end_date: '',
  });
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://34.64.62.80:3000/challenges/create');
   
      console.log(response.data);
 
    } catch (error) {
      console.error(error);
    }
  };
  fetchData(); 
}, []); 


  // 주제미입력
  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('new_page:', e.target.value);
    setTopic(e.target.value);
  };

  // 이미지 선택
  const handleIsImageSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file); // 선택된 파일 상태 업데이트
    if (file) {
      setIsImageSelected(true);
    } else {
      setIsImageSelected(false);
    }
    console.log('이미지', file);
  };

  // 챌린지 개설 버튼 클릭 시 실행
  const handleChallengeSubmit = () => {
    if (topic.trim() === '') {
      alert('주제를 입력하세요.');
    } else if (!selectedFile) {
      alert('이미지를 선택해주세요.');
    } else if (!isAgreed) {
      alert('챌린지를 개설하려면 약관에 동의해야 합니다.');
    } else {
      // 챌린지 생성 API 호출
      axios
        .post('http://34.64.62.80:3000/challenges/create', {
          title: data.title,
          start_date: data.start_date,
          end_date: data.end_date,
          category: data.cate,
          recru_open_date: data.recru_open_date,
          recru_end_date: data.recru_end_date,
        })
        .then((response) => {
          if (response.status === 200) {
            alert('챌린지가 성공적으로 개설되었습니다!');
          }
        })
        .catch((error) => {
          console.log(error.response);
          alert('챌린지 개설에 실패했습니다.');
        });
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
