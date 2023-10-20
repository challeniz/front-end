import React, { useState } from 'react';
import CommentList from '../commentlist/commentlist';
import { BsTrash3 } from 'react-icons/bs';
import * as S from './comment.styles';

const CommentBox = () => {
  const [username] = useState('김챌린지');
  const [comment, setComment] = useState<string>('');
  const [feedComment, setFeedComment] = useState<string[]>([]);
  const [isValid, setIsValid] = useState<boolean>(false);

  const post = () => {
    if (comment.length === 0) {
      return;
    }
    // 댓글등록하는,엔터키
    const copyFeedComment = [...feedComment];
    copyFeedComment.push(comment);
    setFeedComment(copyFeedComment);
    setComment('');
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
      <S.H2Styled>댓글</S.H2Styled>
      <S.CommentWrap>
        <S.CommentInput
          type="text"
          className="CommentInput"
          placeholder="댓글을 달아보세요!"
          onChange={(e) => {
            setComment(e.target.value);
            setIsValid(e.target.value.length > 0);
          }}
          value={comment}
          key="comment-input"
        />
        <S.SubmitBtn isValid={isValid} onClick={post} disabled={!isValid}>
          입력
        </S.SubmitBtn>
      </S.CommentWrap>
      {feedComment.map((commentArr, i) => (
        <S.CommentContainer key={i}>
          <CommentList userName={username} userComment={commentArr} />
          <S.RemoveBtn onClick={() => removeComment(i)}>
            <BsTrash3 />
          </S.RemoveBtn>
        </S.CommentContainer>
      ))}
    </div>
  );
};

export default CommentBox;
