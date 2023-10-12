import { TAppForms } from '../../utils/types';
import { SET_FIELD, CLEAR_FORM, SET_ERROR } from '../action-types/form';

interface IFormPayload {
  form: TAppForms;
  field: string;
  value: string | number;
}

interface ISetField {
  readonly type: typeof SET_FIELD;
  readonly payload: IFormPayload;
}

interface ISetError {
  readonly type: typeof SET_ERROR;
  readonly payload: {
    form: TAppForms;
    field: string;
    error: string;
  };
}

interface IClearForm {
  readonly type: typeof CLEAR_FORM;
  readonly payload: {
    form: TAppForms;
  };
}

export type TFormActions = ISetField | ISetError | IClearForm;

export const setField = ({ form, field, value }: IFormPayload): ISetField => ({
  type: SET_FIELD,
  payload: { form, field, value },
});

export const setError = ({
  form,
  field,
  error,
}: {
  form: TAppForms;
  field: string;
  error: string;
}): ISetError => ({
  type: SET_ERROR,
  payload: { form, field, error },
});

export const clearForm = ({ form }: { form: TAppForms }): IClearForm => ({
  type: CLEAR_FORM,
  payload: { form },
});
