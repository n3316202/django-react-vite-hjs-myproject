import http from '../HttpCommon.js';
import request from '../Requests.js';

const getBoardList = () => {
    return http.get(request.getList);
};

const getPagingList = (path = '/board', search = '') => {
    return http.get(path + search);
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
    // get,
    // write,
    // update,
    // removeAll,
    // findByTitle,
    // getPagingList,
};
