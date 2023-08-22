import React, { useState } from 'react';
import styled from 'styled-components';
import Wrapper from '../common/wrapper';
import CommentList from './commentlist';

const CommentBox = () => {
  const [username] = useState('김챌린지');
  const [comment, setComment] = useState<string>(''); // comment의 타입을 string으로 지정
  const [feedComment, setFeedComment] = useState<string[]>([]); // feedComment의 타입을 string 배열로 지정
  const [isValid, setIsValid] = useState<boolean>(false); // isValid의 타입을 boolean으로 지정

  const post = () => {
    if (comment.length === 0) {
      return; // 댓글이 비어있을 때 게시하지 않도록 합니다.
    }

    const copyFeedComment = [...feedComment];
    copyFeedComment.push(comment);
    setFeedComment(copyFeedComment);
    setComment('');
  };


  
  return (
    <div>
      <Wrapper>
        <input
          type="text"
          className="commentInput"
          placeholder="댓글을 달아보세요!"
          onChange={(e) => {
            setComment(e.target.value);
            setIsValid(e.target.value.length > 0);
          }}
          value={comment}
        />
        <button
          type="button"
          className={isValid ? 'submitCommentActive' : 'submitCommentInactive'}
          onClick={post}
          disabled={!isValid}
        >
          게시
        </button>

        {feedComment.map((commentArr, i) => (
          <CommentList userName={username} userComment={commentArr} key={i} />
        ))}
      </Wrapper>
    </div>
  );
};

export default CommentBox;
