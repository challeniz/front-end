import { useState, ChangeEvent, KeyboardEvent } from 'react';
import * as S from './form_textarea.style';

const FormTextarea = () => {
  const [textValue, setTextValue] = useState<string>('');

  const handleSetValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      // 엔터 키를 누르고 Shift 키를 동시에 누르지 않았을 때
      e.preventDefault(); // 기본 엔터 동작을 막음
      // 이 부분에서 엔터 키에 대한 원하는 동작을 수행할 수 있음
      // 여기에서는 줄 바꿈 문자를 추가하도록 하겠습니다.
      setTextValue((prevValue) => prevValue + '\n');
    }
  };

  return (
    <S.TextareaStyled
      placeholder="여기에 입력하세요"
      value={textValue}
      onChange={handleSetValue}
      onKeyDown={handleKeyDown}
    ></S.TextareaStyled>
  );
};

export default FormTextarea;
