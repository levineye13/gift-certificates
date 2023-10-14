import {
  SET_CERTIFICATES,
  SET_CERTIFICATE_NUMBER,
  SET_FAILED,
  SET_REQUEST,
  SET_SELECT_CERTIFICATE,
  SET_SUCCESS,
} from '../action-types/certificate';
import { ICertificate } from '../../utils/interfaces';
import { TCertificateActions } from '../action/certificate';

type TCertificateState = {
  list: ICertificate[];
  current: ICertificate | null;
  certNumber: string | null;
  request: boolean;
  success: boolean;
  failed: boolean;
};

const initialState: TCertificateState = {
  list: [],
  current: null,
  certNumber: null,
  request: false,
  success: false,
  failed: false,
};

export const certificateReducer = (
  state: TCertificateState = initialState,
  action: TCertificateActions
): TCertificateState => {
  const { type } = action;

  switch (type) {
    case SET_CERTIFICATES:
      return {
        ...state,
        list: action.payload.certificates,
      };

    case SET_SELECT_CERTIFICATE:
      return {
        ...state,
        current: action.payload.certificate,
      };

    case SET_CERTIFICATE_NUMBER:
      return {
        ...state,
        certNumber: action.payload.certNumber,
      };

    case SET_REQUEST:
      return {
        ...state,
        request: true,
        success: false,
        failed: false,
      };

    case SET_SUCCESS:
      return {
        ...state,
        request: false,
        success: true,
        failed: false,
      };

    case SET_FAILED:
      return {
        ...state,
        request: false,
        success: false,
        failed: true,
      };

    default:
      return state;
  }
};
