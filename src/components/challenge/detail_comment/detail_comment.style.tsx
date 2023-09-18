import styled from 'styled-components';

export const CommentWrap = styled.div``;

export const CommentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #d9d9d9;

  h3 {
    font-size: 20px;
    font-weight: 400;

    span {
      font-weight: 600;
    }
  }

  svg {
    width: 2em;
    height: 2em;
  }
`;

export const CommentContent = styled.div`
  padding: 30px 0px;
  border-bottom: 1px solid #d9d9d9;

  p {
    font-size: 16px;
    line-height: 28px;
    color: #161616;
  }
`;

export const CommentFlex = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;

  h3 {
    font-size: 20px;
    font-weight: 400;
    color: #a1a1a1;
    padding-right: 15px;
  }

  h4 {
    font-size: 15px;
    font-weight: 400;
  }

  div {
    margin-left: auto;

    svg {
      width: 1em;
      height: 1em;
    }
  }
`;
