import Http from '../../utils/http'
import { CONFIG } from '../../constants'

const API_ROOT = CONFIG.API_ENDPOINT

const request = (method, endpoint, payload) => {
  const baseUrl = API_ROOT + endpoint
  const params = { url: baseUrl }
  if (payload) {
    params.data = payload
  }
  return Http[method](params)
    .then((response) => response.data.results)
    .catch((err) => {
      throw err
    })
}

export const getAllRockets = () => request('get', '/upcoming')

export const getRocket = (rocketId) => {
  console.log(rocketId, 'api')
  // const endpoint = `/servicio/${rocketId}`
  const endpoint = `${rocketId}`
  return request('get', endpoint)
}
