import styled from 'styled-components';

export const FooterWrap = styled.div`
  position: relative;
`;

export const FooterBox = styled.div`
  background-color: #666;
  text-align: center;
  padding: 40px 150px;

  @media (max-width: 420px) {
    padding: 30px;
  }

  h1 {
    color: #eaeaea;
    text-align: center;
    font-size: 40px;
    margin: 0;
  }
`;

export const Logo = styled.div`
  width: 180px;
  margin-right: 50px;
`;

export const LogoImg = styled.img`
  width: 100%;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const FooterTxt = styled.div`
  text-align: left;

  span {
    display: inline-block;
    vertical-align: top;
    font-size: 15px;
    line-height: 1.5em;
    color: #eaeaea;
    margin-right: 15px;
    margin-bottom: 4px;
    display: block;
  }
`;
export const FooterAddress = styled.div`
  text-align: left;

  address {
    display: inline-block;
    vertical-align: top;
    font-style: normal;
    font-size: 15px;
    line-height: 1.5em;
    color: #eaeaea;
    letter-spacing: 1px;
  }
  span {
    display: block;
    vertical-align: top;
    font-style: normal;
    font-size: 14px;
    line-height: 1.5em;
    color: #eaeaea;
    margin-right: 8px;
    letter-spacing: 1px;
  }
`;

export const Copyright = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #d8d8d8;
  text-align: left;
  padding-top: 15px;
`;
