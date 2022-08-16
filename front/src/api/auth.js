import axios from "./config";
import tokenConfig from "./tokenConfig";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  kakaoAuthenticate(data) {
    return axios.post("accounts/kakao/authenticate/", data);
  },
  googleAuthenticate(data) {
    return axios.post("accounts/google/authenticate/", data);
  },
  getUser() {
    return axios.post("accounts/user/", null, tokenConfig());
  },
  logout() {
    return axios.post("dj-rest-auth/logout/", null, tokenConfig());
  },
};
