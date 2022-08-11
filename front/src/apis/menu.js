import apiClient from "../lib/apiClient";

// path('menus/', views.MenuView.as_view())
const createMenu = async (order_id, name, price) => {
    const menu = {name: `${name}`, price: `${price}`};

    menu.forEach((item) => {
        if(menu.hasOwnProperty(item.name)) {
            menu[item.name] += item.price;
        }
        else {
            menu[item.name] = item.price;
        }
    });

    return await apiClient.post("/menus/", {
        order_id,
        menu,
    });
};

// path('menus/<int:pk>/', views.MenuDetail.as_view())
const getMenuByOrderId = (id) => new Promise((resolve) => {
    resolve(apiClient
        .get(`/menu/?order_id=${id}`)
        .then((response) => response.data));
});

export { createMenu, getMenuByOrderId };
