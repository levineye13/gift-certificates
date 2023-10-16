import React, { useEffect } from 'react';

import { useDispatch, useSelector } from '../store/hooks';
import { setError, setField } from '../store/action';
import { TAppForms } from '../utils/types';

const useForm = ({
  formName,
  submitCallback,
}: {
  formName: TAppForms;
  submitCallback: () => void;
}) => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form[formName]);

  const initialForm = (): void => {
    const formElement: HTMLFormElement | null =
      document.forms.namedItem(formName);

    if (!formElement) {
      return;
    }

    const { elements } = formElement;

    Array.from(elements).forEach((item: Element) => {
      if (
        item instanceof HTMLInputElement ||
        item instanceof HTMLTextAreaElement
      ) {
        if (form.values[item.name]) {
          dispatch(
            setField({
              form: formName,
              field: item.name,
              value: item.value,
              isValid: item.checkValidity(),
            })
          );
        } else {
          dispatch(
            setField({
              form: formName,
              field: item.name,
              value: '',
              isValid: item.checkValidity(),
            })
          );
        }
      }
    });
  };

  const initialErrors = (): void => {
    const formElement: HTMLFormElement | null =
      document.forms.namedItem(formName);

    if (!formElement) {
      return;
    }

    const { elements } = formElement;

    Array.from(elements).forEach((item: Element) => {
      if (
        item instanceof HTMLInputElement ||
        item instanceof HTMLTextAreaElement
      ) {
        dispatch(
          setError({
            form: formName,
            field: item.name,
            error: item.validationMessage,
          })
        );
      }
    });
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

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formElement: HTMLFormElement | null =
      document.forms.namedItem(formName);

    if (!formElement) {
      return;
    }

    const formFieldsIsValid = checkValidity();
    const formElementIsValid = formElement.checkValidity();

    if (!formFieldsIsValid || !formElementIsValid) {
      initialErrors();
      return;
    }

    submitCallback();
  };

  useEffect(() => {
    initialForm();
  }, []);

  return {
    values: form.values,
    errors: form.errors,
    onChange,
    onSubmit,
    checkValidity,
  };
};

export { useForm };
