import React from 'react';
import styled from 'styled-components';
import Wrapper from '../common/wrapper';

interface CommentListProps {
  userName: string;
  userComment: string;
}

const CommentList: React.FC<CommentListProps> = (props) => {
  return (
    <div>
      <CommentListBox>
        <UserCommentBox>
          <UserName>{props.userName}</UserName>
          <UserComment >{props.userComment}</UserComment>
        </UserCommentBox>
      </CommentListBox>
    </div>
  );
};

const CommentListBox = styled.div`
  padding: 0px;
  margin: 0 auto;
  text-align: left;
`;

const UserCommentBox = styled.div`
  float:left;
  margin-left: 40px;
  margin-top: 10px;
  width: 60vw;
}
  `;

const UserName = styled.p`
font-weight: 800;
font-size: 16px;
color: #444;
margin-bottom: 4px;
`
const UserComment = styled.div`
font-size: 14px;
color: #555;
`


export default CommentList;
