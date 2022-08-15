import axios from "axios";

const getLocations = () => new Promise(resolve => {
    resolve(axios
        .get('http://localhost:8000/locations/')
        .then(response => response.data)
        );
});

const addLocation = async (name, latitude, longitude) => {
    return await axios.post('http://localhost:8000/locations/', {
        name,
        latitude,
        longitude,
    });
};

export { getLocations, addLocation }