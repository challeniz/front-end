import React from 'react';
import styled from 'styled-components';
import * as S from './commentlist.styles';
interface CommentListProps {
  userName: string;
  userComment: string;
}

const CommentList: React.FC<CommentListProps> = (props) => {
  return (
    <div>
      <S.CommentListBox>
        <S.UserCommentBox>
          <S.UserName>{props.userName}</S.UserName>
          <S.UserComment>{props.userComment}</S.UserComment>
        </S.UserCommentBox>
      </S.CommentListBox>
    </div>
  );
};

export default CommentList;
