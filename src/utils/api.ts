import config from '../config';
import { HttpMethods } from './constants';
import { ICertificate } from './interfaces';
import { TApiResponce } from './types';

class Api {
  constructor(private url: string) {}

  public async getCertificates(): Promise<TApiResponce<ICertificate[]>> {
    const res: Response = await fetch(
      `${this.url}?MethodName=OSGetGoodList&ismob=0&ApiKey=${config.apiKey}`,
      {
        method: HttpMethods.get,
        headers: {
          Accept: 'application/json',
          ['Content-Type']: 'application/json',
        },
      }
    );

    const data: TApiResponce<ICertificate[]> = await res.json();

    return data;
  }
}

export const api = new Api(`${config.apiUrl}`);
export default Api;
