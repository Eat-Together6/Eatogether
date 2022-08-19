import React, { useEffect, useState } from "react";
import styles from "./styles.js";
import Post from "./Post";
import { getOrderAndJoinOrders } from "api/order.js";

const Board = () => {
  const [orders, setOrder] = useState();

  const getAllOrder = async () => {
    await getOrderAndJoinOrders() //
      .then((res) => {
        const listAllOrder = res.data.map((order) => {
          return {
            store: order.store,
            address: order.location,
            date: order.time.substring(0, 10),
            time: order.time.substring(11, 19),
            description: order.description,
            join: order.join_order_list,
          };
        });
        setOrder(listAllOrder);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  useEffect(() => {
    getAllOrder();
  }, []);

  return (
    <>
      <div style={styles.background}>
        <Post />
      </div>
    </>
  );
};

export default Board;
