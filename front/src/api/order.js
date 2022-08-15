import axios from "axios";

const getOrders = (latitude, longitude) => new Promise((resolve) => {
  if (latitude && longitude) {
    resolve(axios
        .get(`http://localhost:8000/orders/?latitude=${latitude}&longitude=${longitude}`)
        .then((response) => response.data));
  }
  else {
    resolve(axios
        .get("http://localhost:8000/orders/")
        .then((response) => response.data));
  }
});

const createOrder = async (brand, time, latitude, longitude) => { 
  return await axios.post('http://localhost:8000/orders/', {
    brand,
    time,
    latitude,
    longitude,
  });
};


const getOrder = (order_id) => new Promise((resolve) => {
    resolve(axios
        .get(`http://localhost:8000/orders/${order_id}/`)
        .then((response) => response.data));
});


const joinOrder = async (order_id) => {
  return await axios.post(`http://localhost:8000/orders/${order_id}/join/`);
};

export { getOrders, createOrder, getOrder, joinOrder };
