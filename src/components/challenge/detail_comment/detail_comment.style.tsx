import styled from 'styled-components';

export const CommentWrap = styled.div``;

export const CommentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;
  border-bottom: 1px solid #d9d9d9;

  h4 {
    font-size: 30px;
    font-weight: 500;
    margin-left: auto;
    padding-right: 10px;
  }

  h3 {
    font-size: 20px;
    font-weight: 400;

    span {
      font-weight: 600;
    }
  }

  svg {
    width: 1.5em;
    height: 1.5em;
    color: #d0d0d0;
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
      color: #d0d0d0;
    }
  }

  .yellowStar {
    color: #fcc419;
  }
`;

export const ShowClose = styled.button`
  cursor: pointer;
  width: 100%;
  text-align: center;
  background-color: transparent;
  padding: 15px 0;
  font-size: 17px;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
`;
