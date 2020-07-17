import axios from 'axios'
const baseUrl = 'http://localhost:3001/markers'

const getMarkers = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createMarker = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const updateMarker = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deleteMarker = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default { getMarkers, createMarker, updateMarker, deleteMarker }