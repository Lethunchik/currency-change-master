import { BASE_URL_GEO } from "../utils/constants";



export class GeoService {
  static getLoc(latitude: string, longitude: string): Promise<any> {
    return fetch(`${BASE_URL_GEO}${latitude},${longitude}`);
  }
}
