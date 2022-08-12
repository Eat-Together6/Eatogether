import apiClient from "../lib/apiClient";
// http://localhost:8000/apis

// 기존 url : path('joinorders/', views.JoinOrderView.as_view())
// => http://localhost:8000/joinorders/
const getJoinOrders = (id) => new Promise((resolve) => {
    resolve(apiClient
        .get(`/joinorders/${id}/`)
        .then((response) => response.data));
}); // http://localhost:8000/apis/joinorders/{정수}

// 기존 url : path('joinorders/<int:pk>/', views.JoinOrderDetail.as_view()),
// => http://localhost:8000/joinorders/{정수}
const addJoinOrder = async (order_id, follower, description) => {
  return await apiClient.post("/locations/", {order_id, follower, description});
}; // http://localhost:8000/apis/joinorders/{정수}/locations/

export { getJoinOrders, addJoinOrder };
