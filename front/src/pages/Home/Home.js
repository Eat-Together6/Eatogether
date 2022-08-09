import React from "react";
import Bottombar from "../../components/AppBar/Bottombar";
import Sidebar from "../../components/AppBar/Sidebar";
import Map from "../../components/Map/Map";

const Home = () => {
    return (
        <>
            <Map />
            <Sidebar />
            <Bottombar />
        </>
    );
}

export default Home;