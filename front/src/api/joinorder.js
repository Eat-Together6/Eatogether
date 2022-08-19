import axios from "./config";
import tokenConfig from "./tokenConfig";

const getJoinOrders = (id) =>
  new Promise((resolve) => {
    resolve(
      axios
        .get(`http://localhost:8000/joinorders/${id}/`)
        .then((response) => response.data)
    );
  });

const addJoinOrder = (data) => {
  return axios.post("joinorders/", data, tokenConfig());
};

export { getJoinOrders, addJoinOrder };
