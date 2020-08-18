import axios from "axios";
const baseUrl = `https://api.mapbox.com/directions/v5/mapbox/driving`
require("dotenv").config();



const getDirections = (coordinates) => {
  const request = axios.get(`${baseUrl}/${coordinates}?alternatives=false&geometries=geojson&steps=false&access_token=${process.env.REACT_APP_API_TOKEN}`)
  return request.then(response => response.data)
}

export default {getDirections}