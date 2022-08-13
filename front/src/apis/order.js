import apiClient from "../axios/axiosConfig";
// http://localhost:8000/apis

// 기존 url : path('orders/', views.OrderList.as_view())
// => http://localhost:8000/orders/
const getOrders = (latitude, longitude) => new Promise((resolve) => {
  if (latitude && longitude) {
    resolve(apiClient
        .get(`/orders/?latitude=${latitude}&longitude=${longitude}`)
        .then((response) => response.data));
  } // http://localhost:8000/apis/orders/?latitude={문자열}&longitude={문자열}
  else {
    resolve(apiClient
        .get("/orders/")
        .then((response) => response.data));
  } // http://localhost:8000/apis/orders/
});

// 기존 url : path('orders/', views.OrderList.as_view())
// => http://localhost:8000/orders/
const createOrder = async () => { 
  return await apiClient.post('/orders/', {
    brand, 
    time, 
    latitude, 
    longitude,
  }); // http://localhost:8000/apis/orders/
};

// 기존 url : path('orders/<int:pk>/', views.OrderDetail.as_view())
// => http://localhost:8000/orders/{정수}
const getOrder = (order_id) => new Promise((resolve) => {
    resolve(apiClient
        .get(`/orders/${order_id}/`)
        .then((response) => response.data));
}); // http://localhost:8000/apis/orders/{정수}

// 기존 url : path('orders/<int:pk>/join/', views.OrderJoinView.as_view())
// => http://localhost:8000/orders/{정수}/join/
const joinOrder = async (order_id) => {
  return await apiClient.post(`/orders/${order_id}/join/`);
}; // http://localhost:8000/apis/orders/{정수}/join

export { getOrders, createOrder, getOrder, joinOrder };
