import axios from "./config";
import tokenConfig from "./tokenConfig";


const addLocation =  (data) => {
    return axios.post('locations/', data, tokenConfig());
};

const getLocations = () => {
    return axios.get('locations/',null, tokenConfig());
};


  

export { getLocations, addLocation,  }