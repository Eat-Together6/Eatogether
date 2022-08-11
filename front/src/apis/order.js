import apiClient from "../axios/axiosConfig";
// apiClient : 모든 request에 대해 baseURL(http://localhost:8000)을 설정하여 새롭게 만들어지는 axios 인스턴스
// axios 객체의 return 값은 Promise객체이다


const getOrders = (latitude, longitude) => new Promise((resolve) => { // latitude, longitude를 인자로 받는 익명함수()는 비동기 처리할 것
  if (latitude && longitude) { // latitude, longitude 모두 존재한다면
    resolve(apiClient // Promise생성자가 성공했을 때의 resolve함수를 반환하는데(비동기 처리)
        .get(`/orders/?latitude=${latitude}&longitude=${longitude}`) // http://localhost:8000/orders/?latitude={문자열}&longitude={문자열} 에 있는 자원을 get 하고
        .then((response) => response.data)); // apiClient(axios객체)의 then()메서드를 통해 Promise 성공 결과값 response data 를 return
  } 
  else { // latitude, longitude 하나라도 존재하지 않는다면
    resolve(apiClient // Promise생성자가 성공했을 때의 resolve함수(apiClient)를 반환하는데(비동기 처리)
        .get("/orders/") // http://localhost:8000/orders/ 에 있는 자원을 get하고 
        .then((response) => response.data)); // apiClient(axios객체)의 then()메서드를 통해 Promise 성공 결과값 response data 를 return
  }
});

const createOrder = async () => { // 인자를 받지 않는 익명함수()는 비동기 처리할 것
  return await apiClient.post("/orders/", { brand, time, latitude, longitude,}); // apiClient.post함수는 익명함수()가 끝날(성공할) 때까지 기다렸다가 끝나면(성공하면) 
}; // http://localhost:8000/orders/ 에 brand, time latitude, longitude 자원을 post 해라

const joinOrder = async (order_id) => { // order_id를 인자로 받는 익명함수()는 비동기 처리할 것
  return await apiClient.post(`/orders/${order_id}/join/`); // apiClient.post함수는 익명함수()가 끝날(성공할) 때까지 기다렸다가(성공하면)
}; // http://localhost:8000/orders/{정수}/join/ 으로 자원을 post 해라

const getOrder = (order_id) => new Promise((resolve) => { // ordre_id를 인자로 받는 익명함수()는 비동기 처리할 것
    resolve(apiClient // Promise생성자가 성공했을 때의 resolve함수를 반환하는데(비동기 처리)
        .get(`/orders/${order_id}/`) // http://localhost:8000/orders/{정수} 에 있는 자원을 get 하고
        .then((response) => response.data)); // apiClient(axios객체)의 then()메서드를 통해 Promise 성공 결과값 response data 를 return
    console.log(getOrder);
});

export { getOrders, createOrder, joinOrder, getOrder };
