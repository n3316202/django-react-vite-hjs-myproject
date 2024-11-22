import http from '../HttpCommon.js';
import request from '../Requests.js';

const getBoardList = () => {
    return http.get(request.getList);
};

const getPagingList = (path = '/board', search = '') => {
    return http.get(path + search);
};

const getRefreshToken = () => {
    http.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            if (error.response.status === 401) console.log('401 에러 발생');
            {
                const response = await axios.post(
                    'http://127.0.0.1:8000/account/api/token/refresh',
                    {
                        refresh: localStorage.getItem('refreshToken'),
                    }
                );
                console.log(response);
                localStorage.clear();
                localStorage.setItem('accessToken', response.data.token.access);
                localStorage.setItem(
                    'refreshToken',
                    response.data.token.refresh
                );
                localStorage.setItem('userName', response.data.user.username);

                //window.location.href = "/login";
            }
            return Promise.reject(error);
        }
    );
};

// const get = (id) => {
//   return http.get(`/rboard/${id}`);
// };

// const write = (data) => {
//   return http.post(`/rboard/write`, data);
// };

// const update = (id, data) => {
//   return http.put(`/rboard/${id}`, data);
// };

const remove = (id) => {
    return http.delete(`/board/${id}/`);
};

// const removeAll = () => {
//   return http.delete(`/tutorials`);
// };

// const findByTitle = (title) => {
//   return http.get(`/tutorials?title=${title}`);
// };

// const getPagingList = (path = "/rboard/list2", search = "") => {
//   return http.get(path + search);
// };

export default {
    getBoardList,
    getPagingList,
    remove,
    getRefreshToken,
    // get,
    // write,
    // update,
    // removeAll,
    // findByTitle,
    // getPagingList,
};
