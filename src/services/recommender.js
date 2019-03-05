import axios from 'axios';
import { config } from '../config';

export function getRecommendedBooks(payload) {
  return axios.post(config.recommenderUrl, payload);
}
