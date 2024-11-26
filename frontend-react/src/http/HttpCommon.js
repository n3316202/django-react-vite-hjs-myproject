import axios from "axios";
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";

//참고 문헌
//https://blog.theashishmaurya.me/handling-jwt-access-and-refresh-token-using-axios-in-react-app#heading-jwt-auth-token-and-jwt-refresh-token

const REQUEST_URL = "http://127.0.0.1:8000";

const http = axios.create({
  baseURL: REQUEST_URL,
  headers: {
    "Content-type": "application/json",
  },
});

// [요청 설정] 모든 요청의 헤더에 토큰 넣어 보내기
http.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
    //토큰 만료 상태 체크
    //const user = jwtDecode(accessToken);
    //const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1; // 토큰만료 상태 체크
  },
  (error) => {
    return Promise.reject(error);
  }
);

// [응답 설정]
http.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post(
          REQUEST_URL + `/account/api/token/refresh`,
          {
            refresh: refreshToken,
          }
        );

        console.log("토큰 갱신");
        localStorage.clear();
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);

        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
        return axios(originalRequest);
      } catch (error) {
        //refresh 토큰 마저 유효하지 않다는 의미
        // Handle refresh token error or redirect to login
        console.log(error);
        //refresh
        localStorage.clear();
        //router.push('/login');
      }
    }

    return Promise.reject(error);
  }
);

const reIssuedToken = async () => {
  console.log("토큰 재발급 요청");

  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const response = await axios.post(
      REQUEST_URL + `/account/api/token/refresh`,
      {
        refresh: refreshToken,
      }
    );
    //console.log(response);
    console.log("토큰 갱신");
    localStorage.clear();
    localStorage.setItem("accessToken", response.data.access);
    localStorage.setItem("refreshToken", response.data.refresh);

    return response.data.access;
  } catch (e) {
    console.log(e);
    //refresh
    localStorage.clear();
    //router.push('/login');
  }

  return null;
};

export default http;

// prettier-ignore
// export default axios.create({
//   baseURL: "http://127.0.0.1:8000",
//   headers: {
//     "Content-type": "application/json",
//     'Authorization': `${ACCESS_TOKEN}`,
//   },
// });
