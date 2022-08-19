import { useState, useEffect } from "react";
import { Bottombar, Sidebar } from "containers/index";
import Map from "../../components/Map/Map";
import { useLocation } from "react-router-dom";
import { getOrders } from "api/order";

const Home = () => {
  const location = useLocation();
  const [isClickLeaderMK, setClickLeaderMK] = useState(false);
  const [isClickFollowMK, setClickFollowMK] = useState(false);
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState();
  const [pageMax, setPageMax] = useState(1);
  useEffect(() => {
    let orderList = orders;
    let obj = {};
    let l = [];
    let count = 1;
    for (let i = 0; i <= orderList.length; i++) {
      console.log("??", l.length, orderList.length);
      if ((l.length < 4) & (i < orderList.length)) {
        l.push(orderList[i]);
      } else {
        obj[count] = l;
        l = [];
        count = count + 1;
      }
    }
    setPage(obj);
    setPageMax(count);
  }, [orders]);
  const getPositionOrders = async () => {
    await getOrders()
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPositionOrders();
  }, []);
  return (
    <div>
      <Map
        setClickLeaderMK={setClickLeaderMK}
        setClickFollowMK={setClickFollowMK}
        focus={"state" in location ? location.state : null}
        orders={orders}
      />
      <Sidebar orders={orders} page={page} pageMax={pageMax} />
      <Bottombar
        isClickLeaderMK={isClickLeaderMK}
        isClickFollowMK={isClickFollowMK}
      />
    </div>
  );
};

export default Home;
