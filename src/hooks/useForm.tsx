import React from 'react';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setError, setField } from '../store/action';
import { TAppForms } from '../utils/types';

const useForm = ({ formName }: { formName: TAppForms }) => {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.form[formName]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = e;
    console.log(currentTarget);

    if (form) {
      dispatch(
        setField({
          form: formName,
          field: currentTarget.name,
          value: currentTarget.value,
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

  return {
    values: form.values,
    errors: form.errors,
    onChange,
  };
};

export { useForm };
