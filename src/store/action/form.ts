import { SET_FIELD, CLEAR_FORM } from '../action-types/form';

interface IFormPayload {
  form: string;
  field: string;
  value: string | number;
}

interface ISetField {
  readonly type: typeof SET_FIELD;
  readonly payload: IFormPayload;
}

interface IClearForm {
  readonly type: typeof CLEAR_FORM;
  readonly payload: {
    form: string;
  };
}

export type TFormActions = ISetField | IClearForm;

export const setField = (payload: IFormPayload): ISetField => ({
  type: SET_FIELD,
  payload,
});

export const clearForm = (payload: { form: string }): IClearForm => ({
  type: CLEAR_FORM,
  payload,
});
