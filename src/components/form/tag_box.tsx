import React, { useState, useCallback, useEffect, ChangeEvent } from 'react';
import styled from 'styled-components';

interface TagBoxProps {
  tags: string[];
  onChangeTags: (tags: string[]) => void;
}

const TagBoxBlock = styled.div`
`;

const TagForm = styled.form`
  display: flex;
  
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }

  input {
    width:406px;
    height:45px;
    background-color:#f6f6f6;
    border-radius:5px;
    border:1px solid #cfcfcf;
    font-size:16px;
    padding: 0 15px;
  }
  button {
    cursor: pointer;
    padding-right: 2rem;
    padding-left: 2rem;
    border: none;
    margin-left:15px;
    background-color:#339af0;
    border-radius:8px;
    color: white;
    font-weight: bold;
    &:hover {
      
    }
  }
`;

const Tag = styled.div`
  background: #000000;
  padding: 0px 16px;
  border-radius: 20px;
  color: #fff;
  margin-right:5px;
  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 10px;
`;

const TagItem: React.FC<{ tag: string; onRemove: (tag: string) => void }> = React.memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

const TagList: React.FC<{ tags: string[]; onRemove: (tag: string) => void }> = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map(tag => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
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
    [localTags, onChangeTags],
  );

  const onRemove = useCallback(
    (tag: string) => {
      const nextTags = localTags.filter(t => t !== tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
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
    [input, insertTag],
  );

  // tags 값이 바뀔 때
  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  return (
    <TagBoxBlock>
      <TagForm onSubmit={onSubmit}>
        <input
          placeholder="추가된 태그를 클릭하면 삭제할 수 있습니다."
          value={input}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};

export default TagBox;
