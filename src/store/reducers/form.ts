import { TAppForms } from './../../utils/types';
import { CLEAR_FORM, SET_ERROR, SET_FIELD } from '../action-types';
import { TFormActions } from '../action/form';

type TFormState = {
  [form in TAppForms]: {
    values: {
      [field: string]: string | number;
    };
    errors: {
      [field: string]: string;
    };
  };
};

const initialState: TFormState = {
  formCertificate: { values: {}, errors: {} },
};

export const formReducer = (
  state: TFormState = initialState,
  action: TFormActions
): TFormState => {
  const { type } = action;

  switch (type) {
    case SET_FIELD: {
      const { payload } = action;

      return {
        ...state,
        [payload.form]: {
          ...state[payload.form],
          values: {
            ...state[payload.form].values,
            [payload.field]: payload.value,
          },
        },
      };
    }

    case SET_ERROR: {
      const { payload } = action;

      return {
        ...state,
        [payload.form]: {
          ...state[payload.form],
          errors: {
            ...state[payload.form].errors,
            [payload.field]: payload.error,
          },
        },
      };
    }

    case CLEAR_FORM:
      return {
        ...state,
        [action.payload.form]: {
          values: {},
          errors: {},
        },
      };

    default:
      return state;
  }
};
