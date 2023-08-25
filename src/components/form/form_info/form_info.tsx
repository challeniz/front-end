import React, { useState, ChangeEvent, useReducer, useEffect } from 'react';
import * as S from './form_info.style';
import WhiteBox from '../white_box/white_box/white_box';
import WhiteBoxTitle from '../white_box/white_box_title/white_box_title';
import WhiteBoxContents from '../white_box/white_box_contents/white_box_contents';
import ReactDatePicker from '../../calendar/calendar';
import ReactDatePicker2 from '../../calendar/calendar2';
import {
  FormButton,
  FormCancelButton,
  FormSubmitButton,
} from '../form_button/form_button';
import FormAgreeBox from '../form_agree/form_agree';
import TagBox from '../tag_box/tag_box';
import addDays from 'date-fns/addDays';
import useImageUploader from '../../../hook/imgfiler';
import axios from 'axios';

const FormInfo = () => {
  // 태그 관련 상태와 함수들을 정의
  const [tags, setTags] = useState<string[]>([]);
  const [date, setDate] = useState({
    joinningDate: [null, null],
    startDate: [null, null],
  });

  useEffect(() => {
    // joinningDate가 바뀌면 startDate를 자동 변환
    if (date.joinningDate[1]) {
      setDate((prev) => {
        const date = new Date(
          (new Date(prev.joinningDate[1] || '') as any).setDate(
            (prev.joinningDate[1] as any).getDate() + 1
          )
        );
        console.log('date', date);
        return {
          ...(prev as any),
          startDate: [date, null],
        };
      });
    }
  }, [date.joinningDate]);

  const handleChangeTags = (newTags: string[]) => {
    setTags(newTags);
  };

  const [textValue, setTextValue] = useState<string>('');
  const handleSetValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgreeChange = (isChecked: boolean) => {
    setIsAgreed(isChecked);
  };

  const [data, setData] = useState({
    title: '', // 주제의 초기값
    cate: '',
    start_date: '',
    end_date: '',
    recru_open_date: '',
    recru_end_date: '',
  });

  const handleChallengeSubmit = () => {
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
        console.log('200', response.data);

        if (response.status === 200) {
          console.log('챌린지 개설에 성공했습니다!');
          // 챌린지 개설에 성공했을 때 추가적인 로직을 수행하고 싶다면 이곳에 작성
        }
      })
      .catch((error) => console.log(error.response));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 챌린지모집기간+4일후 챌린지 시작됨
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  const { imgSrc, fileInput, onChange } = useImageUploader(
    'https://i.ibb.co/NNhgTLL/2.jpg'
  );

  return (
    <>
      <WhiteBox>
        <WhiteBoxTitle>챌린지 개설</WhiteBoxTitle>
        <WhiteBoxContents>
          <div>
            <S.InputContent>
              <S.LabelStyled htmlFor="formName">주제</S.LabelStyled>
              <S.InputStyled
                type="text"
                id="formName"
                name="cate"
                placeholder="주제를 입력하세요."
                value={data.title}
                onChange={handleChange}
              />
            </S.InputContent>
            <S.InputContent>
              <S.LabelStyled htmlFor="formCate">카테고리</S.LabelStyled>
              <S.SelectStyled
                id="formCate"
                value={data.cate}
                onChange={handleChange}
              >
                <option value="건강">건강</option>
                <option value="취미">취미</option>
                <option value="식습관">식습관</option>
                <option value="공부">공부</option>
                <option value="환경">환경</option>
              </S.SelectStyled>
            </S.InputContent>
            <S.InputContent>
              <S.LabelStyled htmlFor="formDage">챌린지 모집 기간</S.LabelStyled>
              <ReactDatePicker
                joinningDate={date.joinningDate}
                setDate={setDate}
              ></ReactDatePicker>
            </S.InputContent>
            <S.InputContent>
              <S.LabelStyled htmlFor="formDage">챌린지 기간</S.LabelStyled>
              <ReactDatePicker2
                startDate={date.startDate}
                setDate={setDate}
              ></ReactDatePicker2>
            </S.InputContent>
            <S.InputContent>
              <S.LabelStyled htmlFor="formImg">대표 이미지</S.LabelStyled>
              <S.AvatarWrapper
                onClick={() => {
                  if (fileInput.current) {
                    fileInput.current.click();
                  }
                }}
              >
                <S.AvatarImage src={imgSrc} />
              </S.AvatarWrapper>
              <S.InputImg type="file" ref={fileInput} onChange={onChange} />
            </S.InputContent>
            <S.InputContent className="flex-start">
              <S.LabelStyled htmlFor="forDescription">
                챌린지 설명
              </S.LabelStyled>
              <S.TextareaStyled
                placeholder="여기에 입력하세요"
                value={textValue}
                onChange={handleSetValue}
              ></S.TextareaStyled>
            </S.InputContent>
            <S.InputContent className="flex-start">
              <S.LabelStyled htmlFor="formTag">
                태그
                <br />
                <S.SpanStyled>(최대 3개까지 추가)</S.SpanStyled>
              </S.LabelStyled>
              <TagBox tags={tags} onChangeTags={handleChangeTags} />
            </S.InputContent>
          </div>
        </WhiteBoxContents>
      </WhiteBox>
      <FormAgreeBox onAgreeChange={setIsAgreed} />
      <FormButton>
        <FormCancelButton>취소하기</FormCancelButton>
        <FormSubmitButton onClick={handleChallengeSubmit}>
          챌린지 개설하기
        </FormSubmitButton>
      </FormButton>
    </>
  );
};

export default FormInfo;
