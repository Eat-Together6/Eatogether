import React from "react";
import Bottombar from "../../components/AppBar/Bottombar";
import Sidebar from "../../components/AppBar/Sidebar";
import Map from "../../components/Map/Map";

const Home = () => {
    return (
        <div>
            <Map />
            <Sidebar />
            <Bottombar />
        </div>
    );
}

export default Home;