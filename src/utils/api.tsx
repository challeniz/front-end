import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'http://34.64.62.80:3000/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

// 요청 인터셉터 추가하기
apiInstance.interceptors.request.use(
  function(config: any) {
    // 요청이 전달되기 전에 작업 수행
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  function(error: any) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
apiInstance.interceptors.response.use(
  function(response: any) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  function(error: any) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);
