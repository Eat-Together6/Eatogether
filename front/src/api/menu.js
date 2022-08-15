import axios from "axios";

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

    return await axios.post("http://localhost:8000/menus/", {
        join_order_id,
        menu,
    });
};

const getMenuByOrderId = (id) => new Promise((resolve) => {
    resolve(axios
        .get(`http://localhost:8000/menu/?join_order_id=${id}`)
        .then((response) => response.data));
});

export { createMenu, getMenuByOrderId };
