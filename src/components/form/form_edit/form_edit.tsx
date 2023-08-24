import React, { useState, ChangeEvent } from 'react';
import * as S from './form_edit.style';
import WhiteBox from '../white_box/white_box/white_box';
import WhiteBoxTitle from '../white_box/white_box_title/white_box_title';
import WhiteBoxContents from '../white_box/white_box_contents/white_box_contents';
import ReactDatePicker from '../../calendar/calendar';
import ReactDatePicker2 from '../../calendar/calendar2';
import TagBox from '../tag_box/tag_box';
import addDays from 'date-fns/addDays';
import useImageUploader from '../../../hook/imgfiler';

const FormEdit = () => {
  // 태그 관련 상태와 함수들을 정의
  const [tags, setTags] = useState<string[]>([]);
  const [date, setDate] = useState({
    joinningDate: [null, null],
    startDate: [null, null],
  });

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

  const { imgSrc, fileInput, onChange } = useImageUploader(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  );

  return (
    <WhiteBox>
      <WhiteBoxTitle>챌린지 수정</WhiteBoxTitle>
      <WhiteBoxContents>
        <div>
          <S.InputContent>
            <S.LabelStyled htmlFor="formName">주제</S.LabelStyled>
            <S.InputStyled type="text" id="formName" readOnly />
          </S.InputContent>
          <S.InputContent>
            <S.LabelStyled htmlFor="formCate">카테고리</S.LabelStyled>
            <S.SelectStyled id="formCate">
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
            <S.LabelStyled htmlFor="forDescription">챌린지 설명</S.LabelStyled>
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
  );
};

export default FormEdit;
