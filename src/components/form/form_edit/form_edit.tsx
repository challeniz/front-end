import React, {
  ChangeEvent,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useImageUploader from '../../../hook/imgfiler';
import {
  FormButton,
  FormCancelButton,
  FormSubmitButton,
} from '../form_button/form_button';
import TagBox from '../tag_box/tag_box';
import axios from 'axios';
import WhiteBox from '../white_box/white_box/white_box';
import WhiteBoxContents from '../white_box/white_box_contents/white_box_contents';
import WhiteBoxTitle from '../white_box/white_box_title/white_box_title';
import * as S from './form_edit.style';
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
  mainImg: string;
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

const FormEdit: React.FC<FormInfoProps> = (props: FormInfoProps) => {
  const { id } = useParams();
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // 태그 관련 상태와 함수들을 정의
  const [tags, setTags] = useState<string[]>([]);
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [data, setData] = useState<ChallengeFormDataType>({
    title: '',
    cate: '건강',
    description: '',
    start_date: '',
    end_date: '',
    recru_open_date: '',
    recru_end_date: '',
    tag: [],
    mainImg: '',
  });

  //태그
  const handleChangeTags = (newTags: string[]) => {
    setData((prevData) => ({
      ...prevData,
      tag: newTags as string[],
    }));
  };

  //내용
  const [textValue, setTextValue] = useState<string>('');
  const handleSetValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  // 주제 유효성 검사를 위한 상태 변수
  const [isTitleValid, setIsTitleValid] = useState<boolean>(false);

  // 주제 input 변경 핸들러
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setData((prevData) => ({
      ...prevData,
      title: newValue,
    }));

    // 주제 유효성 검사
    setIsTitleValid(newValue.length >= 3 && newValue.length <= 15);
  };

  useEffect(() => {
    const GetChallengeData = async () => {
      try {
        const response = await apiInstance.get(`challenges/${id}`);
        const challengeData = response.data;
        setData((prevData) => ({
          ...prevData,
          title: challengeData.challenge.title,
          cate: challengeData.challenge.category,
          description: challengeData.challenge.description,
          tag: challengeData.challenge.tag,
          recru_open_date: challengeData.challenge.recru_open_date,
          recru_end_date: challengeData.challenge.recru_end_date,
          start_date: challengeData.challenge.start_date,
          end_date: challengeData.challenge.end_date,
          mainImg: challengeData.challenge.mainImg,
        }));
      } catch (error) {
        console.error('Error:', error);
      }
    };

    GetChallengeData();
  }, [id]);

  const handleChallengeSubmit = async () => {
    try {
      const { title, tag } = data;
      if (title.trim() === '' || title == null) {
        alert('주제를 입력하세요.');
      } else if (!isImageSelected) {
        alert('이미지를 선택하세요.');
      } else if (textValue.trim() === '' || textValue == null) {
        alert('챌린지설명을 입력하세요.');
      } else if (tag.length === 0) {
        alert('태그를 입력하세요.');
      }

      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('category', data.cate);
      formData.append('description', textValue);
      for (let i = 0; i < Math.min(3, data.tag.length); i++) {
        formData.append('tag', data.tag[i]);
      }
      if (selectedStartDate && selectedEndDate) {
        formData.append('recru_open_date', selectedStartDate.toISOString());
        formData.append('recru_end_date', selectedEndDate.toISOString());
      }
      if (startDate && endDate) {
        formData.append('start_date', startDate.toISOString());
        formData.append('end_date', endDate.toISOString());
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

      const response = await apiInstance.patch(`challenges/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      });

      // 챌린지 설명을 줄바꿈 문자로 처리
      const formattedDescription = textValue.replace(/\n/g, '<br>'); // 엔터키를 <br> 태그로 변경
      formData.append('description', formattedDescription);

      if (response.status === 201) {
        // 챌린지 생성 성공 후 추가 로직
        alert('챌린지 개설에 성공했습니다!');
        navigate(`/detail/${response.data._id}`);
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error('error', error.response);
      } else {
        console.error('error', error);
      }
    }
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setData((prevData) => ({
      ...prevData,
      cate: value,
    }));
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
      setIsImageSelected(true);
      setSelectedImage(selectedFile); // 이미지 선택됨
    } else {
      setIsImageSelected(false);
      setSelectedImage(null); // 이미지 선택되지 않음
      alert('이미지를 선택해주세요.');
    }
  };

  const handleDateRangeSelect = (
    selectedStartDate: Date,
    selectedEndDate: Date
  ) => {
    setSelectedStartDate(selectedStartDate);
    setSelectedEndDate(selectedEndDate);
    setData((prevData) => ({
      ...prevData,
      recru_open_date: selectedStartDate.toISOString(),
      recru_end_date: selectedEndDate.toISOString(),
    }));
  };

  const handleWeekSelection = (
    startDate: Date | null,
    endDate: Date | null
  ) => {
    setStartDate(startDate);
    setEndDate(endDate);
    setData((prevData) => ({
      ...prevData,
      start_date: startDate?.toISOString() || '',
      end_date: endDate?.toISOString() || '',
    }));
  };

  return (
    <>
      <WhiteBox>
        <WhiteBoxTitle>챌린지 수정</WhiteBoxTitle>
        <WhiteBoxContents>
          <div>
            <S.InputContent>
              <S.LabelStyled htmlFor="formName">주제</S.LabelStyled>
              <p>{data.title}</p>
            </S.InputContent>
            <S.InputContent>
              <S.LabelStyled htmlFor="formCate">카테고리</S.LabelStyled>
              <p>{data.cate}</p>
            </S.InputContent>
            <S.InputContent className="formDate">
              <S.LabelStyled htmlFor="formDage">모집 시작일</S.LabelStyled>
              <p>
                {data.recru_open_date} ~ {data.recru_end_date}
              </p>
            </S.InputContent>
            <S.InputContent className="formDate">
              <S.LabelStyled htmlFor="formDage">챌린지 기간</S.LabelStyled>
              <p>
                {data.start_date} ~ {data.end_date}
              </p>
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
                {data.mainImg && typeof data.mainImg === 'string' && (
                  <S.AvatarImage src={data.mainImg} />
                )}
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
                value={data.description}
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
      <FormButton>
        <FormCancelButton>취소하기</FormCancelButton>
        <FormSubmitButton onClick={handleChallengeSubmit}>
          챌린지 수정하기
        </FormSubmitButton>
      </FormButton>
    </>
  );
};

export default FormEdit;
