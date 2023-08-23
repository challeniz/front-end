import React from 'react';
import * as S from './commentlist.styles';

interface CommentListProps {
  userName: string;
  userComment: string;
}

const CommentList: React.FC<CommentListProps> = (props) => {
  return (
    <S.CommentListWrap>
      <S.CommentListBox>
        <S.UserCommentBox>
          <S.CommentTop>
            <S.UserName>{props.userName}</S.UserName>
            <p className="comment-time">방금 전</p>
          </S.CommentTop>
          <S.UserComment>{props.userComment}</S.UserComment>
        </S.UserCommentBox>
      </S.CommentListBox>
    </S.CommentListWrap>
  );
};

export default CommentList;
