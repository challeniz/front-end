import axios from 'axios';

//로그인 API 호출
export const loginApiInstance = axios.create({
  baseURL: 'http://34.64.62.80:3000/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

//회원가입시 이메일 중복확인 API 호출
export const emailApiInstance = axios.create({
  baseURL: 'http://34.64.62.80:3000',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

//회원가입시 모든 유호성 검사 통과 후 유저정보 등록하는 API 호출
export const joinApiInstance = axios.create({
  baseURL: 'http://34.64.62.80:3000',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});
