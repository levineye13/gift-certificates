import React, { FC, ReactElement } from 'react';
import { useMask } from '@react-input/mask';

import Field from '../form-field';
import { useDispatch, useSelector } from '../../store/hooks';
import { setError, setField } from '../../store/action';
import { TAppForms } from '../../utils/types';

interface IField {
  readonly value: string | number;
  readonly error: string;
  readonly formName: TAppForms;
  readonly className?: string;
  readonly tabIndex?: number;
}

const FormFieldPhone: FC<IField> = ({
  value,
  error,
  formName,
  className,
  tabIndex,
}): ReactElement => {
  const dispatch = useDispatch();
  const { formCertificate } = useSelector((state) => state.form);

  const phoneInputMask = '+7 (___) ___-__-__';

  const inputRef = useMask({
    mask: phoneInputMask,
    replacement: { _: /\d/ },
    showMask: true,
    onMask: (e) => {
      dispatch(
        setField({
          form: formName,
          field: 'tel',
          value: e.detail.value,
          isValid: e.detail.isValid,
        })
      );

      if (e.detail.isValid) {
        dispatch(
          setError({
            form: formName,
            field: 'tel',
            error: '',
          })
        );
      } else {
        dispatch(
          setError({
            form: formName,
            field: 'tel',
            error: 'Некорректеный номер телефона.',
          })
        );
      }
    },
  });

  return (
    <Field
      type="text"
      name="tel"
      value={formCertificate.values.tel?.value}
      error={error}
      required
      onChange={() => {}}
      className={className}
      tabIndex={tabIndex}
      inputRef={inputRef}
      placeholder={phoneInputMask}
      inputMode="tel"
    >
      Телефон
    </Field>
  );
};

export default FormFieldPhone;
