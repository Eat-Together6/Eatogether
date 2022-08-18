import axios from "./config";
import tokenConfig from "./tokenConfig";

// 백엔드에서 views, urls 수정해서 쿼리문으로 데이터 접근할 수 있어야 함

export default {
  getOrders() { // 모든 order 가져오기 
    return axios.get("/orders/").then(res => res.data);
  },
  getOrdersAndJoinOrders(data) { // 모든 order, joinorder 가져오기
    return axios.post("/orders/user/", data, tokenConfig());
  },
  createOrder(data) { // Leader의 order 등록하기
    return axios.post("/orders/", data, tokenConfig);
  },
  createJoinOrder(data) { // Follower의 joinorder 등록하기
    return axios.post("/joinorders/", data, tokenConfig);
  },
  getOrderByLeader(data) { // Leader의 특정 order 가져오기 <수정필요>
    return axios.get("orders?leader=???", data, tokenConfig());
  },
  getOrderByFollower(data) { // Follower의 특정 joinorder 가져오기 <수정필요>
    return axios.get("joinorders?follower=???", data, tokenConfig());
  },
};
