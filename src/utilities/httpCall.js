import axios from "axios";
import {baseURL} from '../config/index.config'
export default ({url, data, params, options = {method: 'GET'}}) => {

  return axios({
    baseURL,
    url,
    data,
    params,
    ...options,
  }).catch((res) => {
    throw res;
  });
};