import React, { FC, ReactElement } from 'react';
import { useMask } from '@react-input/mask';

import Field from '../form-field';
import { useDispatch } from '../../store/hooks';
import { setError } from '../../store/action';
import { appFormNames } from '../../utils/constants';

interface IField {
  readonly value: string | number;
  readonly error: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly className?: string;
  readonly tabIndex?: number;
}

const FormFieldPhone: FC<IField> = ({
  value,
  error,
  onChange,
  className,
  tabIndex,
}): ReactElement => {
  const dispatch = useDispatch();
  const inputRef = useMask({
    mask: '+7 (___) ___-__-__',
    replacement: { _: /\d/ },
    showMask: true,
    onMask: (e) => {
      if (e.detail.isValid) {
        dispatch(
          setError({
            form: appFormNames.formCertificate,
            field: 'tel',
            error: '',
          })
        );
      } else {
        dispatch(
          setError({
            form: appFormNames.formCertificate,
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
      value={value}
      error={error}
      required
      onChange={(e) => {
        console.log(inputRef);
        onChange(e);
      }}
      className={className}
      tabIndex={tabIndex}
      inputRef={inputRef}
    >
      Телефон
    </Field>
  );
};

export default FormFieldPhone;
