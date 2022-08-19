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
      <Sidebar orders={orders} />
      <Bottombar
        isClickLeaderMK={isClickLeaderMK}
        isClickFollowMK={isClickFollowMK}
      />
    </div>
  );
};

export default Home;
