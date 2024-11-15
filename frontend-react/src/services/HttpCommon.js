import axios from "axios";

let ACCESS_TOKEN = localStorage.getItem("accessToken");

// prettier-ignore
export default axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-type": "application/json",
    'Authorization': `${ACCESS_TOKEN}`,
  },
});
