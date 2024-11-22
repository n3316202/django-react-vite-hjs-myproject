import http from '../HttpCommon.js';
import request from '../Requests.js';

//https://jcon.tistory.com/197 참고사이트

/** LOGIN API */
const login = async (user) => {
    return await http.post(request.login, user);
};

/** Get Tocken */
const getToken = async (user) => {
    return await http.post(request.getToken, user);
};

export default {
    login,
    getToken,
};
