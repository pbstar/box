import axios from "axios";
axios.defaults.baseURL = "http://api.mcweb.club/box/";
import vant from "./vant.js";
export default {
  get(url, data) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: data,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          vant.tipFail("系统错误");
          reject(err);
        });
    });
  },
  post(url, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          vant.tipFail("系统错误");
          reject(err);
        });
    });
  },
};
