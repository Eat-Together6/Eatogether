import apiClient from "../lib/apiClient"

// path('locations/', views.LocationList.as_view())
const getLocations = () => new Promise((resolve) => {
    resolve(apiClient
        .get('/locations/')
        .then(response => response.data));
});

// path('locations/', views.LocationList.as_view())
const addLocation = async (name, lat, lon) => {
    return await apiClient.post('/locations/', {
        name: name,
        latitude: lat,
        longitude: lon
    })
}

export { getLocations, addLocation }