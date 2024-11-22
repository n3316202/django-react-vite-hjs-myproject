import axios from 'axios';

const REQUEST_URL = 'http://127.0.0.1:8000';

const http = axios.create({
    baseURL: REQUEST_URL,
    headers: {
        'Content-type': 'application/json',
    },
});

// [요청 설정] 모든 요청의 헤더에 토큰 넣어 보내기
http.interceptors.request.use(
    (config) => {
        console.log('http.interceptors.request.use::');
        console.log(config);

        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');

        if (config.url == '/account/api/token/refresh') {
            // 토큰 재발급 요청일 때만  헤더에 refresh_token 넣어서 보내고
            config.headers.Refresh = refreshToken;
        } else {
            // 그 외 요청은 헤더에 access_token 넣어서 보내기
            //config.headers.Authorization = accessToken;
            config.headers.Authorization = `Bearer ${accessToken}`; //Bearer를 넣을것
        }
        return config;
    },
    (error) => {
        console.log('리퀘스트 에러');
        console.log(error);
        return Promise.reject(error);
    }
);

// [응답 설정]
http.interceptors.response.use(
    // 정상 응답 처리
    (response) => {
        console.log('응답성공');
        return response;
    },
    // 에러 처리
    async (error) => {
        console.log('응답에러');
        console.log(error);
        const { config, response } = error;

        // 토큰 자동 재발급 필요 외 다른 에러
        // 401에러가 아니거나 재요청이거나 refresh 요청인 경우 그냥 에러 발생
        if (
            config.url === `/account/api/token/refresh/` ||
            response?.status !== 401 ||
            config.sent
        ) {
            return Promise.reject(error);
        }

        // 아닌 경우 토큰 갱신
        config.sent = true; // 무한 재요청 방지
        const accessToken = await reIssuedToken(); // 토큰 재발급 받아서

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`; // 헤더에 넣어서
        }

        return http(config); // 다시 요청
    }
);

// access_token 재발급 요청 (access_token 반환))
const reIssuedToken = async () => {
    console.log('토큰 재발급 요청');
    try {
        await http.options(`/account/api/token/refresh`).then((response) => {
            console.log(response);
            localStorage.clear();
            localStorage.setItem('accessToken', response.data.token.access);
            localStorage.setItem('refreshToken', response.data.token.refresh);
            localStorage.setItem('userName', response.data.user.username);

            return response.data.token.access;
        });
    } catch (e) {
        console.log(e);
    }
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
