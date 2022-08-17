import React, { useState } from "react";
import { Bottombar, Sidebar } from "containers/index";
import Map from "../../components/Map/Map";

const Home = ({user}) => {
  const [isClickLeaderMK, setClickLeaderMK] = useState(false);
  const [isClickFollowMK, setClickFollowMK] = useState(false);
  return (
    <div>
      <Map setClickLeaderMK={setClickLeaderMK}  setClickFollowMK={setClickFollowMK} />
      <Sidebar />
      <Bottombar user={user} isClickLeaderMK={isClickLeaderMK} isClickFollowMK={isClickFollowMK} />
    </div>
  );
};

export default Home;
