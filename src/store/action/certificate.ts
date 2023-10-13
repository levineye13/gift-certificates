import { api } from '../../utils/api';
import { ICertificate } from '../../utils/interfaces';
import { convertObjectKeys } from '../../utils/utils';
import {
  SET_CERTIFICATES,
  SET_SELECT_CERTIFICATE,
} from '../action-types/certificate';
import { AppDispatch, TAppThunk } from '../types';

interface ISetCertificates {
  readonly type: typeof SET_CERTIFICATES;
  readonly payload: {
    certificates: ICertificate[];
  };
}

interface ISetSelectCertificate {
  readonly type: typeof SET_SELECT_CERTIFICATE;
  readonly payload: {
    certificate: ICertificate;
  };
}

export type TCertificateActions = ISetCertificates | ISetSelectCertificate;

export const setCertificates = (
  certificates: ICertificate[]
): ISetCertificates => ({
  type: SET_CERTIFICATES,
  payload: {
    certificates,
  },
});

export const setSelectCertificate = (
  certificate: ICertificate
): ISetSelectCertificate => ({
  type: SET_SELECT_CERTIFICATE,
  payload: {
    certificate,
  },
});

export const fetchCertificates: TAppThunk =
  () => async (dispatch: AppDispatch) => {
    try {
      const res = await api.getCertificates();

      if (res && res.result === 0) {
        dispatch(
          setCertificates(
            res.data.map((item) =>
              convertObjectKeys<ICertificate>(item, 'lower')
            )
          )
        );
      }
    } catch (e) {
      console.error(e);
    }
  };
