import { api } from '../../utils/api';
import { appFormNames } from '../../utils/constants';
import { ICertificate } from '../../utils/interfaces';
import { convertObjectKeys } from '../../utils/utils';
import {
  SET_CERTIFICATES,
  SET_CERTIFICATE_NUMBER,
  SET_SELECT_CERTIFICATE,
  SET_FAILED,
  SET_REQUEST,
  SET_SUCCESS,
  CLEAR_CERTIFICATE_NUMBER,
  CLEAR_SELECT_CERTIFICATE,
} from '../action-types/certificate';
import { AppDispatch, TAppThunk } from '../types';
import { clearForm } from './form';

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

interface ISetCertificateNumber {
  readonly type: typeof SET_CERTIFICATE_NUMBER;
  readonly payload: {
    certNumber: string;
  };
}

interface ISetRequest {
  readonly type: typeof SET_REQUEST;
}

interface ISetSuccess {
  readonly type: typeof SET_SUCCESS;
}

interface ISetFailed {
  readonly type: typeof SET_FAILED;
}

interface IClearSelectCertificate {
  readonly type: typeof CLEAR_SELECT_CERTIFICATE;
}

interface IClearCertificateNumber {
  readonly type: typeof CLEAR_CERTIFICATE_NUMBER;
}

export type TCertificateActions =
  | ISetCertificates
  | ISetSelectCertificate
  | ISetCertificateNumber
  | ISetRequest
  | ISetSuccess
  | ISetFailed
  | IClearCertificateNumber
  | IClearSelectCertificate;

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

export const setCertificateNumber = ({
  certNumber,
}: {
  certNumber: string;
}): ISetCertificateNumber => ({
  type: SET_CERTIFICATE_NUMBER,
  payload: {
    certNumber,
  },
});

export const setRequest = (): ISetRequest => ({
  type: SET_REQUEST,
});

export const setSucces = (): ISetSuccess => ({
  type: SET_SUCCESS,
});

export const setFailed = (): ISetFailed => ({
  type: SET_FAILED,
});

export const clearSelectCertificate = (): IClearSelectCertificate => ({
  type: CLEAR_SELECT_CERTIFICATE,
});

export const clearCertificateNumber = (): IClearCertificateNumber => ({
  type: CLEAR_CERTIFICATE_NUMBER,
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

export const saveCertificate: TAppThunk =
  ({
    id,
    tablename,
    primarykey,
    price,
    summa,
    clientname,
    phone,
    email,
    msg,
  }: ICertificate & {
    clientname: string;
    phone: string;
    email: string;
    msg: string;
  }) =>
  async (dispatch: AppDispatch) => {
    dispatch(setRequest());

    try {
      const res = await api.saveCertificate({
        id,
        tablename,
        primarykey,
        price,
        summa,
        clientname,
        phone,
        email,
        msg,
      });

      if (res && res.result === 0) {
        const lowerObjResponce = convertObjectKeys(res.data[0], 'lower');

        dispatch(
          setCertificateNumber({ certNumber: lowerObjResponce.certnumber })
        );
        dispatch(setSucces());
        dispatch(clearSelectCertificate());
        dispatch(clearForm({ form: appFormNames.formCertificate }));
      } else {
        dispatch(setFailed());
      }
    } catch (e) {
      console.error(e);
      setFailed();
    }
  };
