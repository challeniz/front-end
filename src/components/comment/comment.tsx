import React, { useState } from 'react';
import styled from 'styled-components';
import Wrapper from '../common/wrapper';
import CommentList from './commentlist';
import { BsTrash3 } from 'react-icons/bs';

const CommentBox = () => {
  const [username] = useState('김챌린지');
  const [comment, setComment] = useState<string>('');
  const [feedComment, setFeedComment] = useState<string[]>([]);
  const [isValid, setIsValid] = useState<boolean>(false);

  const post = () => {
    if (comment.length === 0) {
      return;
    }
    // 댓글등록하는
    const copyFeedComment = [...feedComment];
    copyFeedComment.push(comment);
    setFeedComment(copyFeedComment);
    setComment('');
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && isValid) {
      post(); // 엔터 키를 누르고 유효한 경우에 댓글 등록 함수 호출
    }
  };

  // 댓글삭제
  const removeComment = (indexToRemove: number) => {
    const updatedFeedComment = feedComment.filter(
      (_, index) => index !== indexToRemove
    );
    setFeedComment(updatedFeedComment);
  };

  return (
    <div>
      <Wrapper>
        <H2Styled>후기,댓글</H2Styled>
        <CommentInput
          type="text"
          className="CommentInput"
          placeholder="댓글을 달아보세요!"
          onKeyDown={handleKeyDown} // 엔터 키 감지 이벤트 핸들러 추가
          onChange={(e) => {
            setComment(e.target.value);
            setIsValid(e.target.value.length > 0);
          }}
          value={comment}
          key="comment-input"
        />
        <SubmitBtn isValid={isValid} onClick={post} disabled={!isValid}>
          입력
        </SubmitBtn>

        {feedComment.map((commentArr, i) => (
          <CommentContainer key={i}>
            <CommentList userName={username} userComment={commentArr} />
            <RemoveBtn onClick={() => removeComment(i)}>
              <BsTrash3 />
            </RemoveBtn>
          </CommentContainer>
        ))}
      </Wrapper>
    </div>
  );
};

const CommentInput = styled.input`
  padding: 10px;
  border: none;
  text-align: left;
  font-size: 14px;
  outline: none;
  width: 60vw;
  float: left;
  background-color: transparent;
  border-bottom: 1px solid #000;
  margin-left: 30px;
  margin-top: 10px;
  ::placeholder {
    color: #999;
  }
`;
const H2Styled = styled.h2`
  font-size: 25px;
  padding-bottom: 25px;
  font-weight: 700;
  text-align: left;
  padding: 30px;
`;

const SubmitBtn = styled.button<{ isValid: boolean }>`
  float: left;
  position: relative;
  left: -58px;
  font-size: 14px;
  width: 66px;
  height: 34px;
  border-radius: 10px;
  background: #d9d9d9;
  color: #111;
  border: none;
  cursor: pointer;
`;
const CommentContainer = styled.div`
  padding: 0px;
  float: left;
`;

const RemoveBtn = styled.button`
  background-color: transparent;
  color: #AF0F0F;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

export default CommentBox;
