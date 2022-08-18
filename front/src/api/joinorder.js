import axios from "./config";

const getJoinOrders = (id) => new Promise((resolve) => {
    resolve(axios
        .get(`http://localhost:8000/joinorders/${id}/`)
        .then((response) => response.data));
});

const addJoinOrder =  (order_id, follower, description) => {
  return  axios.post("joinorders/", {order_id, follower, description});
};

export { getJoinOrders, addJoinOrder };
