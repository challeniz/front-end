import styled from 'styled-components';

export const CommentListWrap = styled.div`
  width: 100%;
`;

export const CommentListBox = styled.div`
  padding: 0px;
  margin: 0 auto;
  text-align: left;
`;

export const UserCommentBox = styled.div`
padding: 30px 20px;
border-bottom:1px solid #ddd;
}
  `;

export const UserName = styled.p`
  font-weight: 800;
  font-size: 16px;
  color: #444;
`;
export const UserComment = styled.div`
  font-size: 18px;
  color: #555;
`;

export const CommentTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  p.comment-time {
    padding-left: 10px;
    font-size: 13px;
    color: #505050;
  }
`;
