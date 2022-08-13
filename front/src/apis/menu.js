import apiClient from "../lib/apiClient";
// http://localhost:8000/apis/

// 기존 url : path('menus/', views.MenuView.as_view())
// => http://localhost:8000/menus/
const createMenu = async (join_order_id, menu_name, menu_price) => {
    const menu = {menu_name: `${menu_name}`, menu_price: `${menu_price}`};

    menu.forEach((item) => {
        if(menu.hasOwnProperty(item.menu_name)) {
            menu[item.menu_name] += item.menu_price;
        }
        else {
            menu[item.menu_name] = item.menu_price;
        }
    }); 

    return await apiClient.post("/menus/", {
        join_order_id,
        menu,
    }); // http://localhost:8000/apis/menus/
};

// 기존 url : path('menus/<int:pk>/', views.MenuDetail.as_view())
// => http://localhost:8000/menus/{정수}/
const getMenuByOrderId = (id) => new Promise((resolve) => {
    resolve(apiClient
        .get(`/menu/?join_order_id=${id}`)
        .then((response) => response.data));
}); // http://localhost:8000/apis/menu/?join_order_id={정수}

export { createMenu, getMenuByOrderId };
