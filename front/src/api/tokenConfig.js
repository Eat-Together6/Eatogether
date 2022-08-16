import { getCookie } from "cookies-next";

const tokenConfig = () => {
  const token = getCookie("access_token");
  console.log("ㅅㅂ?", token);
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};
export default tokenConfig;
