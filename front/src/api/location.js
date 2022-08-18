import axios from "./config";
import tokenConfig from "./tokenConfig";

const getLocations = () => new Promise(resolve => {
    resolve(axios
        .get('http://localhost:8000/locations/')
        .then(response => response.data)
        );
});

const addLocation =  (data) => {
    return axios.post('locations/', data, tokenConfig());
};

export { getLocations, addLocation }