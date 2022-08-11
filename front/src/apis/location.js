import apiClient from "../lib/apiClient"

const getLocations = () => new Promise((resolve) => {
    resolve(apiClient
        .get('/locations/')
        .then(response => response.data));
});

const addLocation = async (name, lat, lon) => {
    return await apiClient.post('/locations/', {
        name: name,
        latitude: lat,
        longitude: lon
    })
}

export { getLocations, addLocation }