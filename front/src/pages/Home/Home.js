import React from "react";
import { Bottombar, Sidebar } from "containers/index";
import Map from "../../components/Map/Map";

const Home = () => {
  return (
    <div>
      <Map />
      <Sidebar />
      <Bottombar />
    </div>
  );
};

export default Home;
