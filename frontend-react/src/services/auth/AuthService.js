import http from "../HttpCommon.js";
import request from "../Requests.js";

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
