import { CLEAR_FORM, SET_FIELD } from '../action-types';
import { TFormActions } from '../action/form';

interface IFormState {
  [form: string]: {
    [field: string]: string | number;
  };
}

const initialState: IFormState = {};

export const formReducer = (state = initialState, action: TFormActions) => {
  const { type } = action;

  switch (type) {
    case SET_FIELD: {
      const { payload } = action;

      return {
        ...state,
        [payload.form]: {
          ...state[payload.form],
          [payload.field]: payload.value,
        },
      };
    }

    case CLEAR_FORM:
      return {
        ...state,
        [action.payload.form]: {},
      };

    default:
      return state;
  }
};
