import axios from "axios";
const baseUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places`
require("dotenv").config();



const getLocation = (longitude, latitude) => {
  const request = axios.get(`${baseUrl}/${longitude},${latitude}.json?types=place&access_token=${process.env.REACT_APP_API_TOKEN}`)
  return request.then(response => response.data)
}

export default {getLocation}