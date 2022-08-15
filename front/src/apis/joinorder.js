import axios from "axios";

const getJoinOrders = (id) => new Promise((resolve) => {
    resolve(axios
        .get(`http://localhost:8000/joinorders/${id}/`)
        .then((response) => response.data));
});

const addJoinOrder = async (order_id, follower, description) => {
  return await axios.post("http://localhost:8000/joinorders/", {order_id, follower, description});
};

export { getJoinOrders, addJoinOrder };
