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
          'Content-Type': 'application/json',
        },
      }
    );

    const data: TApiResponce<ICertificate[]> = await res.json();

    return data;
  }

  public async saveCertificate({
    id,
    tablename,
    primarykey,
    price,
    summa,
    clientname,
    phone,
    email,
  }: {
    id: number;
    tablename: string;
    primarykey: string;
    price: string;
    summa: string;
    clientname: string;
    phone: string;
    email: string;
  }): Promise<TApiResponce<Array<{ certnumber: string }>>> {
    const res: Response = await fetch(
      `${this.url}?MethodName=OSSale&ApiKey=${
        config.apiKey
      }&Id=${id}&TableName=${tablename}&PrimaryKey=${primarykey}&Price=${price}&Summa=${summa}&ClientName=${clientname}&Phone=${phone}&Email=${email}&PaymentTypeId=${2}&UseDelivery=${0}`,
      {
        method: HttpMethods.post,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );

    const data: TApiResponce<Array<{ certnumber: string }>> = await res.json();

    return data;
  }
}

export const api = new Api(`${config.apiUrl}`);
export default Api;
