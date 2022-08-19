import React, { useEffect, useState } from "react";
import styles from "./styles.js";
import Post from "./Post";
import { getOrderAndJoinOrders } from "api/order.js";

const Board = () => {
  const [orders, setOrder] = useState(null);

  const getAllOrder = async () => {
    await getOrderAndJoinOrders() //
      .then((res) => {
        console.log("우저", res);
        const listAllOrder = res.data.map((order) => {
          return {
            store: order.store,
            address: order.location_obj.location_nickname,
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
  useEffect(() => {
    console.log("orders", orders);
  }, [orders]);
  let num = 0;
  return (
    <>
      <div style={styles.background}>
        {!orders ? (
          <div>모집한 이력이 없습니다</div>
        ) : (
          orders.map((order) => {
            num += 1;
            return (
              <Post
                num={num}
                store={order.store}
                address={order.address}
                date={order.date}
                time={order.time}
                description={order.description}
                join={order.join}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Board;
