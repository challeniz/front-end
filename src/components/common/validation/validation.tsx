export const emailRegex =
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

export const passwordRegex =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

export const nickNameRegex =
  /^(?=.*[a-zA-Z0-9\u3131-\uD79D])[\w\u3131-\uD79D]{2,8}$/;

export const numberRegex = /^\d{11}$/;
