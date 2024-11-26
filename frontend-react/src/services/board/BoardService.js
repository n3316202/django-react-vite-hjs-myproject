import request from "./../../http/Requests.js";
import http from "./../../http/HttpCommon.js";

const getBoardList = () => {
  return http.get(request.getList);
};

const getPagingList = (path = "/board", search = "") => {
  return http.get(path + search);
};

const get = (id) => {
  return http.get(`/board/${id}`);
};

const write = (data) => {
  return http.post(`/board/`, data);
};

const update = (id, data) => {
  return http.put(`/board/${id}/`, data);
};

const remove = (id) => {
  return http.delete(`/board/${id}/`);
};

const replyShape = (board) => {
  return http.put(`/board/reply_shape/`, board);
};

const userWrite = () => {
  return http.post(`/board/user_write/`);
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
  get,
  write,
  update,
  replyShape,
  userWrite,
  // write,
  // update,
  // removeAll,
  // findByTitle,
  // getPagingList,
};
