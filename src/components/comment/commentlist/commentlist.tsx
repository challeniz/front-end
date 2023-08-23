import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../common/wrapper/wrapper';

interface CommentListProps {
  userName: string;
  userComment: string;
}

const CommentList: React.FC<CommentListProps> = (props) => {
  return (
    <div>
      <Wrapper>
        <div className="userCommentBox">
          <p className="userName">{props.userName}</p>
          <div className="userComment">{props.userComment}</div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CommentList;
