export type TAppForms = 'formCertificate';

export type TApiResponce<TData = {}> = {
  result: number;
  description: string;
  data: TData;
};
