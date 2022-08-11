import apiClient from "../axios/axiosConfig";


// path('orders/', views.OrderList.as_view())
const getOrders = (latitude, longitude) => new Promise((resolve) => {
  if (latitude && longitude) {
    resolve(apiClient
        .get(`/orders/?latitude=${latitude}&longitude=${longitude}`)
        .then((response) => response.data));
  } 
  else {
    resolve(apiClient
        .get("/orders/")
        .then((response) => response.data));
  }
});

// path('orders/', views.OrderList.as_view())
const createOrder = async () => { 
  return await apiClient.post('/orders/', {
    brand, 
    time, 
    latitude, 
    longitude,
  });
};

// path('orders/<int:pk>/', views.OrderDetail.as_view())
const getOrder = (order_id) => new Promise((resolve) => {
    resolve(apiClient
        .get(`/orders/${order_id}/`)
        .then((response) => response.data));
});

// path('orders/<int:pk>/join/', views.OrderJoinView.as_view())
const joinOrder = async (order_id) => {
  return await apiClient.post(`/orders/${order_id}/join/`);
};

export { getOrders, createOrder, getOrder, joinOrder };
