import axios from 'axios';
import { withBaseUrl } from '../utils/apiUrl';

export class NewsService {
  static getArticles() {
    return axios(withBaseUrl("top-headlines?country=us&"))
  }

  static getByCategory(category) {
    return axios(withBaseUrl(`top-headlines?country=us&category=${category}&`))
  }
}