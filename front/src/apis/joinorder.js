const getJoinOrders = (id) => new Promise((resolve) => {
    resolve(apiClient
        .get(`http://localhost:8000/joinorders/${id}/`)
        .then((response) => response.data));
}); // http://localhost:8000/apis/joinorders/{정수}

const addJoinOrder = async (order_id, follower, description) => {
  return await apiClient.post("http://localhost:8000/joinorders/", {order_id, follower, description});
}; // http://localhost:8000/apis/joinorders/{정수}/locations/

export { getJoinOrders, addJoinOrder };
