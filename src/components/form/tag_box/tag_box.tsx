import React, { useState, useCallback, useEffect, ChangeEvent } from 'react';
import * as S from './tag_box.style';

interface TagBoxProps {
  tags: string[];
  onChangeTags: (tags: string[]) => void;
}

const TagItem: React.FC<{ tag: string; onRemove: (tag: string) => void }> =
  React.memo(({ tag, onRemove }) => (
    <S.Tag onClick={() => onRemove(tag)}>#{tag}</S.Tag>
  ));

const TagList: React.FC<{ tags: string[]; onRemove: (tag: string) => void }> =
  React.memo(({ tags, onRemove }) => (
    <S.TagListBlock>
      {tags.map((tag) => (
        <TagItem key={tag} tag={tag} onRemove={onRemove} />
      ))}
    </S.TagListBlock>
  ));

const TagBox: React.FC<TagBoxProps> = ({ tags, onChangeTags }) => {
  const [input, setInput] = useState<string>('');
  const [localTags, setLocalTags] = useState<string[]>([]);

  const insertTag = useCallback(
    (tag: string) => {
      if (!tag) return; // 공백이라면 추가하지 않음
      if (localTags.includes(tag)) return; // 이미 존재한다면 추가하지 않음
      if (localTags.length === 3 || tag.length >= 5) {
        if (tag.length >= 5) {
          window.alert('태그는 5글자 이하로 입력해주세요.');
        }
        return;
      }
      const nextTags = [...localTags, tag];
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags]
  );

  const onRemove = useCallback(
    (tag: string) => {
      const nextTags = localTags.filter((t) => t !== tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags]
  );

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      insertTag(input.trim()); // 앞뒤 공백 없앤 후 등록
      setInput(''); // input 초기화
    },
    [input, insertTag]
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
      <TagList tags={localTags} onRemove={onRemove} />
    </>
  );
};

export default TagBox;
