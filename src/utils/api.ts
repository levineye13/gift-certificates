import config from '../config';
import { HttpMethods } from './constants';
import { ICertificate } from './interfaces';
import { TApiResponce } from './types';

class Api {
  constructor(private url: string) {}

  public async getCertificates(): Promise<TApiResponce<ICertificate[]>> {
    const params = new URLSearchParams({
      MethodName: 'OSGetGoodList',
      ApiKey: config.apiKey || '',
    });

    const res: Response = await fetch(`${this.url}?${params}`, {
      method: HttpMethods.get,
    });

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
    msg,
  }: {
    id: number;
    tablename: string;
    primarykey: string;
    price: string;
    summa: string;
    clientname: string;
    phone: string;
    email: string;
    msg: string;
  }): Promise<TApiResponce<Array<{ certnumber: string }>>> {
    const res: Response = await fetch(this.url, {
      method: HttpMethods.post,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        MethodName: 'OSSale',
        ApiKey: config.apiKey || '',
        Id: `${id}`,
        TableName: tablename,
        PrimaryKey: primarykey,
        Price: price,
        Summa: summa,
        ClientName: clientname,
        Phone: phone,
        Email: email,
        PaymentTypeId: '2',
        UseDelivery: '0',
        MsgText: msg,
      }),
    });

    const data: TApiResponce<Array<{ certnumber: string }>> = await res.json();

    return data;
  }
}

export const api = new Api(`${config.apiUrl}`);
export default Api;
