import React, {
  ChangeEvent,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import useImageUploader from '../../../hook/imgfiler';
import ReactDatePicker from '../../calendar/calendar';
import ReactDatePicker2 from '../../calendar/calendar2';
import {
  FormButton,
  FormCancelButton,
  FormSubmitButton,
} from '../form_button/form_button';
import FormAgreeBox from '../form_agree/form_agree';
import TagBox from '../tag_box/tag_box';
// import useImageUploader from '../../../hook/imgfiler';
import axios from 'axios';
import WhiteBox from '../white_box/white_box/white_box';
import WhiteBoxContents from '../white_box/white_box_contents/white_box_contents';
import WhiteBoxTitle from '../white_box/white_box_title/white_box_title';
import * as S from './form_info.style';
import { apiInstance } from '../../../utils/api';

interface ChallengeFormDataType {
  title: string;
  cate: string;
  description: string;
  start_date: string;
  end_date: string;
  recru_open_date: string;
  recru_end_date: string;
  tag: string[];
}

interface FormInfoProps {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setTopic: (arg: string) => void;
  topic: string;
  isImageSelected: boolean;
  handleIsImageSelected: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChallengeSubmit: () => void;
  data: ChallengeFormDataType;
  setData: Dispatch<SetStateAction<ChallengeFormDataType>>;
}

const FormInfo: React.FC<FormInfoProps> = (props: FormInfoProps) => {
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

  const [data, setData] = useState<ChallengeFormDataType>({
    title: '',
    cate: '',
    description: '',
    start_date: '',
    end_date: '',
    recru_open_date: '',
    recru_end_date: '',
    tag: [],
  });

  //태그
  const handleChangeTags = (newTags: string[]) => {
    console.log('newTags', newTags);
    setData((prevData) => ({
      ...prevData,
      tag: newTags as string[],
    }));
  };
  console.log('태그', data);
  const [textValue, setTextValue] = useState<string>('');
  const handleSetValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  // 동의하기 체크
  const [isAgreed, setIsAgreed] = useState(false);
  const handleAgreeChange = (isChecked: boolean) => {
    setIsAgreed(isChecked);
  };

  const handleChallengeSubmit = async () => {
    try {
      const { title } = data;
      if (title.trim() === '' || title == null) {
        alert('주제를 입력하세요.');
      } else if (!isImageSelected) {
        alert('이미지를 선택하세요.');
      } else if (textValue.trim() === '' || textValue == null) {
        alert('챌린지설명을 입력하세요.');
      } else if (tags.length === 0) {
        console.log('설명', tags);
      } else if (!isAgreed) {
        alert('챌린지를 개설하려면 약관에 동의해야 합니다.');
      }

      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('category', data.cate);
      formData.append('description', textValue);
      for (let i = 0; i < Math.min(3, data.tag.length); i++) {
        formData.append('tag', data.tag[i]);
      }

      if (date.joinningDate[0]) {
        formData.append('recru_open_date', date.joinningDate[0]);
      }
      if (date.joinningDate[1]) {
        formData.append('recru_end_date', date.joinningDate[1]);
      }
      if (date.startDate[0]) {
        formData.append('start_date', date.startDate[0]);
      }
      if (date.startDate[1]) {
        formData.append('end_date', date.startDate[1]);
      }

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

      const response = await apiInstance.post('challenges/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      });

      if (response.status === 201) {
        // 챌린지 생성 성공 후 추가 로직
        alert('챌린지 개설에 성공했습니다!');
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.log('error', error.response);
      } else {
        console.log('error', error);
      }
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data.cate);
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setData((prevData) => ({
      ...prevData,
      cate: value,
    }));
    console.log(value);
  };

  // 이미지지업로드
  const { imgSrc, fileInput, onChange } = useImageUploader(
    'https://i.ibb.co/NNhgTLL/2.jpg'
  );

  // 챌린지유효성 검사-이미지
  const [isImageSelected, setIsImageSelected] = useState(false);
  const handleIsImageSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setIsImageSelected(true); // 이미지 선택됨
    } else {
      setIsImageSelected(false); // 이미지 선택되지 않음
      alert('이미지를 선택해주세요.');
    }
    console.log('이미지', selectedFile);
  };

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
                name="title"
                placeholder="주제를 입력하세요."
                value={data.title}
                onChange={handleChange}
              />
            </S.InputContent>
            <S.InputContent>
              <S.LabelStyled htmlFor="formCate">카테고리</S.LabelStyled>
              <S.SelectStyled
                id="formCate"
                value={data.cate} // 선택된 값이 상태로부터 표시됨
                onChange={handleChangeSelect} // 선택값 변경 시 상태 업데이트
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
                <S.AvatarImage src={imgSrc} alt="Uploaded" />
              </S.AvatarWrapper>
              <S.InputImg
                type="file"
                ref={fileInput}
                onChange={handleIsImageSelected}
              />
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
