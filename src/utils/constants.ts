import { TAppForms } from './types';

export const appFormNames: {
  [name in TAppForms]: TAppForms;
} = {
  formCertificate: 'formCertificate',
};

export enum HttpMethods {
  head = 'HEAD',
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  patch = 'PATCH',
  delete = 'DELETE',
}

export const enum Pages {
  root = '/',
  certificates = '/certificates',
  contacts = '/contacts',
  payment = '/payment',
}
