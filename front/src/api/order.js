import axios from "./config";
import tokenConfig from "./tokenConfig";

// 백엔드에서 views, urls 수정해서 쿼리문으로 데이터 접근할 수 있어야 함

const getOrders = () => {
  return axios.get("orders/");
};

const getOrder = (pk) => {
  return axios.get(`orders/${pk}`);
};

const getOrderAndJoinOrders = () => {
  return axios.get("orders/user/", tokenConfig());
};

const createOrder = (data) => {
  return axios.post("orders/", data, tokenConfig());
};

const createJoinOrder = (data) => {
  return axios.post("joinorders/", data, tokenConfig());
};

// const getOrderByLeader = () => {
//   return axios.get("orders?leader=???", tokenConfig());
// };

// const getOrderByFollower = () => {
//   return axios.get("joinorders?follower=???", tokenConfig());
// };

export {
  getOrders,
  getOrder,
  getOrderAndJoinOrders,
  createOrder,
  createJoinOrder,
};
