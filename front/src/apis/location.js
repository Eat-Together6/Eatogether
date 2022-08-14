const getLocations = () => new Promise(resolve => {
    resolve(apiClient
        .get('/locations/')
        .then(response => response.data)
        );
}); // http://localhost:8000/locations/

const addLocation = async (name, lat, lon) => {
    return await apiClient.post('/locations/', {
        name: name,
        latitude: lat,
        longitude: lon
    }) // http://localhost:8000/locations/
}

export { getLocations, addLocation }