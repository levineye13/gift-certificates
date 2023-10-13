import {
  SET_CERTIFICATES,
  SET_SELECT_CERTIFICATE,
} from '../action-types/certificate';
import { ICertificate } from '../../utils/interfaces';
import { TCertificateActions } from '../action/certificate';

type TCertificateState = {
  list: ICertificate[];
  current: ICertificate | null;
};

const initialState: TCertificateState = {
  list: [],
  current: null,
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

    default:
      return state;
  }
};
