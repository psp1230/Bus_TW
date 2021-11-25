import axios from 'axios';
import { getAuthorizationHeader } from '@/utils/auth';
import buildQuery from 'odata-query';
import humps from 'humps';
import * as R from 'ramda';

const request = axios.create({
  baseURL: 'https://ptx.transportdata.tw',
  paramsSerializer: (parmas) => R.replace('?', '', buildQuery(parmas)),
});

request.interceptors.request.use((config) => {
  config.headers = getAuthorizationHeader();
  return config;
});

request.interceptors.response.use((response) => {
  if (
    response.data &&
    R.contains('application/json')
  ) {
    response.data = humps.camelizeKeys(response.data, (key, convert) => {
      return key === 'ID' ? 'id' : convert(key);
    });
  }
  return response;
});

export default request;
