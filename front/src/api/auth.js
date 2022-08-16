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
  logout(data) {
    return axios.post("dj-rest-auth/logout/", data, tokenConfig());
  },
  login(data) {
    return axios.post("dj-rest-auth/login/", data);
  },
  registration(data) {
    return axios.post("dj-rest-auth/registration/", data);
  },
};
