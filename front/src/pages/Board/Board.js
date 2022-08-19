import React, { useEffect } from "react";
import styles from "./styles.js";
import Post from "./Post";
import { getOrderAndJoinOrders } from "api/order.js";

const Board = () => {
  const getAllOrder = async () => {
    await getOrderAndJoinOrders() //
      .then((res) => {
        console.log("AA", res);
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
