import React, { useState, useCallback, useEffect, ChangeEvent } from 'react';
import * as S from './tag_box.style';
import { AiOutlineClose } from 'react-icons/ai';
import { apiInstance } from '../../../utils/api';
import { useParams } from 'react-router-dom';

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

interface TagBoxProps {
  tags: string[];
  onChangeTags: (tags: string[]) => void;
  children?: React.ReactNode;
  value?: string[] | undefined;
}

interface TagListProps {
  tags: string[];
  onRemove: (tag: string) => void;
  children?: React.ReactNode;
}

const TagList: React.FC<TagListProps> = ({ tags, onRemove }) => (
  <S.TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </S.TagListBlock>
);

const TagItem: React.FC<{ tag: string; onRemove: (tag: string) => void }> =
  React.memo(({ tag, onRemove }) => (
    <S.Tag>
      {tag}
      <S.Closebutton onClick={() => onRemove(tag)}>
        <AiOutlineClose />
      </S.Closebutton>
    </S.Tag>
  ));

const TagBox: React.FC<TagBoxProps> = ({ tags, onChangeTags }) => {
  const { id } = useParams();
  const [input, setInput] = useState<string>('');
  const [localTags, setLocalTags] = useState<string[]>([]);
  const [existingTags, setExistingTags] = useState<string[]>([]); // 기존 태그 목록 저장

  const [data, setData] = useState<ChallengeFormDataType>({
    title: '',
    cate: '건강',
    description: '',
    start_date: '',
    end_date: '',
    recru_open_date: '',
    recru_end_date: '',
    tag: [],
  });

  useEffect(() => {
    const GetChallengeData = async () => {
      try {
        const response = await apiInstance.get(`challenges/${id}`);
        const challengeData = response.data;

        // 기존 태그 목록 저장
        setExistingTags(challengeData.challenge.tag);

        // 나머지 도전과제 데이터 저장
        setData((prevData: ChallengeFormDataType) => ({
          ...prevData,
          tag: challengeData.challenge.tag,
        }));

        // Initialize localTags with the API data
        setLocalTags(challengeData.challenge.tag);

        console.log(challengeData.challenge.tag);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    GetChallengeData();
  }, [id]);

  const insertTag = useCallback(
    (tag: string) => {
      if (!tag) return;

      const nextTags = Array.from(
        new Set([...existingTags, ...localTags, tag])
      );
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [existingTags, localTags, onChangeTags]
  );

  const onRemove = useCallback(
    (tag: string) => {
      // 선택한 태그를 제거하고 최종 태그 목록을 상위 컴포넌트로 전달
      const nextTags = existingTags.filter((t) => t !== tag);
      setExistingTags(nextTags);
      onChangeTags(nextTags);
    },
    [existingTags, onChangeTags]
  );

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const trimmedInput = input.trim();

      if (trimmedInput && !existingTags.includes(trimmedInput)) {
        // 중복되지 않는 새로운 태그만 추가합니다.
        insertTag(trimmedInput);
        setInput('');

        // Update existingTags with the new tag
        setExistingTags((prevExistingTags) => [
          ...prevExistingTags,
          trimmedInput,
        ]);
      }
    },
    [input, existingTags, insertTag]
  );

  // tags 값이 바뀔 때
  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  return (
    <>
      <S.TagForm onSubmit={onSubmit}>
        <input
          placeholder="추가된 태그를 클릭하면 삭제할 수 있습니다."
          value={input}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </S.TagForm>
      <TagList tags={existingTags} onRemove={onRemove} />
    </>
  );
};

export default TagBox;
