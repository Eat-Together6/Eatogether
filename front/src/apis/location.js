import apiClient from "../lib/apiClient"
// http://localhost:8000/apis

// 기존 url : path('locations/', views.LocationList.as_view())
const getLocations = () => new Promise((resolve) => {
    resolve(apiClient
        .get('/locations/')
        .then(response => response.data));
}); // http://localhost:8000/apis/locations/

// 기존 url : path('locations/', views.LocationList.as_view())
const addLocation = async (name, lat, lon) => {
    return await apiClient.post('/locations/', {
        name: name,
        latitude: lat,
        longitude: lon
    }) // http://localhost:8000/apis/locations/
}

export { getLocations, addLocation }