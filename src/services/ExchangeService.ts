import { BASE_URL_EXCH, EXCHANGE_APIKEY } from "../utils/constants";



export class ExchangeService {
  static getLatest(): Promise<any> {
    return fetch(`${BASE_URL_EXCH}/latest`, {
      headers: {
        apikey: EXCHANGE_APIKEY,
      },
    });
  }
  static getConvert(to: string, from : string, amount: number): Promise<any> {
    return fetch(`${BASE_URL_EXCH}/convert?to=${to}&from=${from}&amount=${amount}`, {
      headers: {
        apikey: EXCHANGE_APIKEY,
      },
    });
  }
}
