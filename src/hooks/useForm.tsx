import React from 'react';

import { useDispatch, useSelector } from '../store/hooks';
import { setError, setField } from '../store/action';
import { TAppForms } from '../utils/types';

const useForm = ({ formName }: { formName: TAppForms }) => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form[formName]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = e;

    if (form) {
      dispatch(
        setField({
          form: formName,
          field: currentTarget.name,
          value: currentTarget.value,
          isValid: currentTarget.checkValidity(),
        })
      );

      if (currentTarget.validity.valid) {
        dispatch(
          setError({
            form: formName,
            field: currentTarget.name,
            error: '',
          })
        );
      } else {
        dispatch(
          setError({
            form: formName,
            field: currentTarget.name,
            error: currentTarget.validationMessage,
          })
        );
      }
    }
  };

  const checkValidity = (): boolean => {
    for (const key in form.values) {
      const field = form.values[key];

      if (!field.isValid) {
        return false;
      }
    }

    return true;
  };

  return {
    values: form.values,
    errors: form.errors,
    onChange,
    checkValidity,
  };
};

export { useForm };
