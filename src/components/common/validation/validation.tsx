import react from 'react';

{
  /* 이메일 valid 유효성 검사 */
}
export const emailRegex =
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;


  {
    /* 비밀번호 valid 유효성 검사 */
  }
export const passwordRegex =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;


    {
      /* 닉네임 valid 유효성 검사 */
    }
export const nickNameRegex = /^(?=.*[a-zA-Z0-9\u3131-\uD79D])[\w\u3131-\uD79D]{2,8}$/;


{
  /* 전화번호 valid 유효성 검사 */
}
export const numberRegex = /^\d{11}$/;