import http from "../HttpCommon.js";
import request from "../Requests.js";

/** LOGIN API */
const getToken = async (user) => {
  return await http.post(request.getToken, user);
};

export default {
  getToken,
};
