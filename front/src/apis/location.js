const getLocations = () => new Promise(resolve => {
    resolve(apiClient
        .get('http://localhost:8000/locations/')
        .then(response => response.data)
        );
});

const addLocation = async (name, lat, lon) => {
    return await apiClient.post('http://localhost:8000/locations/', {
        name: name,
        latitude: lat,
        longitude: lon
    })
}

export { getLocations, addLocation }