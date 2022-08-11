import apiClient from "../lib/apiClient";
import { Order } from "./order";

// path('boards/', views.BoardView.as_view())
const getBoards = (id) => new Promise((resolve) => {
    resolve(apiClient
        .get(`/boards/${id}/`)
        .then((response) => response.data));
});

// path('boards/<int:pk>/', views.BoardDetail.as_view())
const addBoard = async (order_id, user, content) => {
  return await apiClient.post("/locations/", {order_id, user, content,});
};

export { getBoards, addBoard };
