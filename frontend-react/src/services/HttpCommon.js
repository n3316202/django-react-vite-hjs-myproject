import axios from "axios";
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";

const REQUEST_URL = "http://127.0.0.1:8000";

const http = axios.create({
  baseURL: REQUEST_URL,
  headers: {
    "Content-type": "application/json",
  },
});

// [요청 설정] 모든 요청의 헤더에 토큰 넣어 보내기
http.interceptors.request.use(
  async (config) => {
    //console.log('http.interceptors.request.use::');
    //console.log(config);
    try {
      let accessToken = localStorage.getItem("accessToken");

      if (accessToken == null) {
        return config;
      }
      //토큰 만료 상태 체크
      const user = jwtDecode(accessToken);
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1; // 토큰만료 상태 체크

      if (isExpired) {
        accessToken = await reIssuedToken();
      }

      //console.log("accessToken:", accessToken);
      //console.log(`Bearer ${accessToken}`);

      config.headers.Authorization = `Bearer ${accessToken}`;
    } catch (error) {
      console.log(요청에러);
      console.log(error);
    }

    return config;
  },
  (error) => {
    console.log("리퀘스트 에러");
    console.log(error);
    return Promise.reject(error);
  }
);

// [응답 설정]
// http.interceptors.response.use(
//     // 정상 응답 처리
//     (response) => {
//         console.log('정상응답');
//         return response;
//     },
//     // 에러 처리
//     async (error) => {
//         console.log('응답에러');
//         console.log(error);

//         // 토큰 자동 재발급 필요 외 다른 에러
//         // 401에러가 아니거나 재요청이거나 refresh 요청인 경우 그냥 에러 발생
//         if (error.response.status === 401) {
//             const accessToken = localStorage.getItem('accessToken');

//             const user = jwtDecode(accessToken);
//             const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1; // 토큰만료 상태 체크

//             if (isExpired) {
//                 // 토큰 만료
//                 console.log('토큰 만료');
//                 const refreshToken = localStorage.getItem('refreshToken');
//                 const response = await axios.post(
//                     REQUEST_URL + `/account/api/token/refresh`,
//                     {
//                         refresh: refreshToken,
//                     }
//                 );

//                 console.log(response);
//                 localStorage.clear();
//                 localStorage.setItem('accessToken', response.data.access);
//                 localStorage.setItem('refreshToken', response.data.refresh);

//                 const accessToken = localStorage.getItem('accessToken');
//                 error.headers.Authorization = `Bearer ${accessToken}`;

//                 // 중단된 요청을(에러난 요청)을 토큰 갱신 후 재요청
//                 //await axios.request(error.config);
//                 return error;
//             }
//         }

//         return Promise.reject(error);
//     }
// );

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
