import { configs } from "../services/configs";

export function withBaseUrl(path) {
  return `${configs.API_BASE_URL}${path}apiKey=${configs.API_KEY}`
}